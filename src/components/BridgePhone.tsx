import "./BridgePhone.css";

export function BridgePhone() {
  return (
    <figure className="bridge-preview">
      <div className="bridge-preview-device">
        <img
          src="/projects/bridgestatus-mobile.jpg"
          alt="BridgeStatus.ca open on a phone, showing the Welland Canal bridge map and status controls."
          width="390"
          height="844"
          loading="lazy"
          decoding="async"
        />
      </div>
    </figure>
  );
}
