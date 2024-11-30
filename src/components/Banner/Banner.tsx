import { FC, PropsWithChildren } from 'react';

type BannerVariant = "info" | "success" | "warning" | "error" | "primary" | "secondary" | "light" | "dark";

type BannerProps = {
  variant?: BannerVariant;
  visible?: boolean;
  onClose?: () => void;
};

const variantBorderColorMap = {
  info: "info",
  success: "success",
  warning: "warning",
  error: "danger",
  primary: "primary",
  secondary: "secondary",
  light: "light",
  dark: "dark",
}

const Banner: FC<PropsWithChildren<BannerProps>> = ({
  children,
  variant = "info",
  visible = true,
  onClose,
}) => {
  if (!visible) return null;

  return (
    <div className={`alert alert-${variantBorderColorMap[variant]}`} role="alert">
      {children}
      <button type="button" className="btn btn-outline-dark" onClick={() => onClose?.()}>x</button>
    </div>
  );
};

export default Banner;

