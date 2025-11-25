type ServiceCardProps = {
  title: string;
  description: string;
  image: string;
  onClick?: () => void;
};

export function ServiceCard({ title, description, image, onClick }: ServiceCardProps) {
  return (
    <article
      className="
        flex h-full flex-col overflow-hidden
        rounded-2xl border border-border/60 bg-background/80
        shadow-sm backdrop-blur
      "
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(event) => {
        if (!onClick) return;
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onClick();
        }
      }}
    >
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="text-base font-semibold tracking-tight lg:text-lg">{title}</h3>
        <p className="text-sm text-muted-foreground lg:text-[0.95rem]">{description}</p>
      </div>
    </article>
  );
}
