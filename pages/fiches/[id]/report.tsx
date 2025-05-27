import { useRouter } from 'next/router';
import { useState } from 'react';

export default function ReportPage() {
  const router = useRouter();
  const { id } = router.query;
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSent(false);
    try {
      const res = await fetch('/api/report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ficheId: id,
          ficheTitre: '', // Optionnel, à compléter si besoin
          message,
        }),
      });
      if (res.ok) {
        setSent(true);
        setMessage('');
      } else {
        setError('Erreur lors de l\'envoi.');
      }
    } catch {
      setError('Erreur lors de l\'envoi.');
    }
  };

  return (
    <div className="report-fullscreen-modal" role="dialog" aria-modal="true" aria-labelledby="report-title">
      <button
        className="report-close-btn"
        onClick={() => router.back()}
        aria-label="Fermer la fenêtre de signalement"
      >✕</button>
      <h2 id="report-title" style={{marginBottom: 8}}>Signaler un problème sur la fiche <span style={{color:'#f59e42'}}>#{id}</span></h2>
      <p style={{marginBottom: 16, fontSize: '0.98em', color: '#555'}}>
        Merci de nous aider à améliorer le contenu.<br />
        <span style={{color:'#f59e42'}}>Signale toute erreur ou notion manquante&nbsp;!</span>
      </p>
      <form onSubmit={handleSubmit} style={{width: '100%', maxWidth: 400}}>
        <textarea
          required
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder="Décris précisément le problème ou la notion manquante…"
          rows={5}
          style={{resize: 'vertical'}}
          aria-label="Votre message"
        />
        <div style={{display: 'flex', gap: 8, marginTop: 8}}>
          <button type="submit" disabled={sent} style={{
            background: '#ff5252',
            color: '#fff',
            border: 'none',
            borderRadius: 6,
            padding: '0.5em 1.2em',
            fontWeight: 600,
            cursor: sent ? 'not-allowed' : 'pointer'
          }}>
            Envoyer
          </button>
          <button
            type="button"
            onClick={() => router.back()}
            style={{
              background: '#eee',
              color: '#333',
              border: 'none',
              borderRadius: 6,
              padding: '0.5em 1.2em',
              fontWeight: 500,
              cursor: 'pointer'
            }}
          >
            Annuler
          </button>
        </div>
      </form>
      {sent && (
        <div className="success-message" style={{
          marginTop: 18,
          borderRadius: 6,
          padding: '0.7em 1em',
          fontWeight: 500
        }}>
          Merci pour ton signalement ! Nous allons corriger cela rapidement.
        </div>
      )}
      {error && (
        <div className="error-message" style={{
          marginTop: 18,
          borderRadius: 6,
          padding: '0.7em 1em',
          fontWeight: 500
        }}>
          {error}
        </div>
      )}
      <style jsx>{`
        .report-fullscreen-modal {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.7);
          z-index: 3000;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 1.5rem 0.5rem;
        }
        .report-close-btn {
          position: absolute;
          top: 1.2rem;
          right: 1.2rem;
          font-size: 2rem;
          background: none;
          border: none;
          color: #fff;
          cursor: pointer;
        }
        form {
          background: #fff;
          color: #23272f;
          padding: 1.5rem 1.2rem 1.2rem 1.2rem;
          border-radius: 10px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.10);
          width: 100%;
        }
        textarea {
          width: 100%;
          margin-bottom: 0.5rem;
          border-radius: 6px;
          border: 1px solid #ddd;
          padding: 0.7em;
          font-size: 1em;
          font-family: inherit;
          background: #fff;
          color: #23272f;
        }
        /* Dark mode */
        :global(body.dark) .report-fullscreen-modal {
          background: rgba(24,28,35,0.92);
        }
        :global(body.dark) form {
          background: #23272f;
          color: #f1f5f9;
        }
        :global(body.dark) textarea {
          background: #181c23;
          color: #f1f5f9;
          border: 1px solid #334155;
        }
        :global(body.dark) .report-close-btn {
          color: #f1f5f9;
        }
        :global(body.dark) .success-message {
          background: #1e4620;
          color: #b9fbc0;
        }
        :global(body.dark) .error-message {
          background: #3a1a1a;
          color: #ffb4b4;
        }
        @media (max-width: 600px) {
          .report-fullscreen-modal {
            padding: 0.5rem 0.1rem;
          }
          form {
            padding: 1rem 0.5rem 0.7rem 0.5rem;
            min-width: 0;
          }
        }
      `}</style>
    </div>
  );
}