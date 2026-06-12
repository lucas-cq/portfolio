type LogoProps = {
  size?: number;
  className?: string;
  title?: string;
};

/**
 * Lucas's LC monogram, rendered from his own vector and tinted with the
 * site's coral accent gradient so it sits in the theme.
 */
export default function Logo({ size = 40, className, title = "Lucas Cummings" }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 380 380"
      fill="none"
      role="img"
      aria-label={title}
      className={className}
    >
      <defs>
        <linearGradient
          id="lc-grad"
          x1="0"
          y1="0"
          x2="380"
          y2="380"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="var(--accent-bright)" />
          <stop offset="100%" stopColor="var(--accent)" />
        </linearGradient>
      </defs>

      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M199.628 379.76C300.088 374.747 380 291.705 380 190C380 85.0659 294.934 0 190 0C179.792 0 169.772 0.805019 160 2.35503V340.262L297 260.088V322.777L199.628 379.76ZM190 91.9937L289 41V88.848L230.308 119.079V216.482L296 178.809V224.92L233.294 260.88L233.308 260.88L232.855 261.132L230.207 262.65L230.187 262.615L190.216 284.835L190.305 262.05L190.308 262.05V92.4765L190 91.9937Z"
        fill="url(#lc-grad)"
      />
      <path
        d="M109 18.0813C44.5776 48.4873 0 114.038 0 190C0 265.962 44.5776 331.513 109 361.919V18.0813Z"
        fill="url(#lc-grad)"
      />
    </svg>
  );
}
