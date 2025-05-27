import { useEffect, useState } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  cible: "concours" | "bac";
};

function getNextDate(month: number, day: number, hour = 8) {
  const now = new Date();
  const year = now.getFullYear();
  let cible = new Date(year, month - 1, day, hour, 0, 0);

  // Si la date cible de cette année est déjà passée, prends l'année suivante
  if (cible.getTime() <= now.getTime()) {
    cible = new Date(year + 1, month - 1, day, hour, 0, 0);
  }
  return cible;
}

const DATES = {
  concours: () => getNextDate(4, 14, 8), // 14 avril à 8h
  bac: () => getNextDate(6, 16, 8),      // 16 juin à 8h
};

function getTimeLeftForCible(cible: "concours" | "bac") {
  const cibleDate = DATES[cible]();
  const now = new Date();
  const diff = cibleDate.getTime() - now.getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function CompteAReboursModal({ open, onClose, cible }: Props) {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeftForCible(cible));

  useEffect(() => {
    if (!open) return;
    setTimeLeft(getTimeLeftForCible(cible));
    const interval = setInterval(() => setTimeLeft(getTimeLeftForCible(cible)), 1000);
    return () => clearInterval(interval);
  }, [open, cible]);

  if (!open) return null;

  return (
    <div
      className="compte-modal-overlay"
      onClick={onClose}
      tabIndex={-1}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="compte-modal-content"
        onClick={e => e.stopPropagation()}
      >
        <button
          className="compte-modal-close"
          onClick={onClose}
          aria-label="Fermer"
          type="button"
        >
          ×
        </button>
        <div className="compte-bulle">
          <div className="compte-titre">
            {cible === "concours" ? "Avant les Concours" : "Avant le Bac"}
          </div>
          <div className="compte-decompte">
            <span>{timeLeft.days}j</span>
            <span>{timeLeft.hours}h</span>
            <span>{timeLeft.minutes}m</span>
            <span>{timeLeft.seconds}s</span>
          </div>
        </div>
      </div>
    </div>
  );
}