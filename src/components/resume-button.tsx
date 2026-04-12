type ResumeButtonProps = {
  href?: string;
};

export function ResumeButton({ href = "#contact" }: ResumeButtonProps) {
  return (
    <a
      className="inline-flex items-center rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
      href={href}
    >
      Resume & Contact
    </a>
  );
}

