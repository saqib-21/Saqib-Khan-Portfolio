import "./ProjectDevice.css";

type ProjectDeviceProps = {
  device: "tablet" | "laptop";
  src: string;
  alt: string;
  width: number;
  height: number;
};

export function ProjectDevice({ device, src, alt, width, height }: ProjectDeviceProps) {
  const orientation = height > width ? "portrait" : "landscape";

  return (
    <figure className="project-device" data-device={device} data-orientation={orientation}>
      <div className="project-device-unit">
        <div className="project-device-frame">
          <img src={src} alt={alt} width={width} height={height} loading="lazy" decoding="async" />
        </div>
      </div>
    </figure>
  );
}
