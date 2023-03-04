import styles from "./screen.module.scss";

interface Props {
  children: React.ReactNode;
  id?: string;
  className?: string;
  fullHeight?: boolean;
}

const Screen = ({ children, id, className, fullHeight }: Props) => {
  return (
    <article
      className={[styles.screen, fullHeight ? styles.full : "", className].join(" ")}
      id={id}
    >
      {children}
    </article>
  );
};

export default Screen;
