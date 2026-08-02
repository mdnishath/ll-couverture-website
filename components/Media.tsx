type Props = {
  src: string;
  alt: string;
  priority?: boolean;
};

/**
 * Les photos sont hébergées sur un domaine externe : on utilise une balise
 * <img> native pour rester indépendant de l'optimiseur d'images.
 */
export default function Media({ src, alt, priority = false }: Props) {
  return (
    <div className="media">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        {...(priority ? { fetchPriority: "high" as const } : {})}
      />
    </div>
  );
}
