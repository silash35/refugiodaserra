import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      Estrada dos Pireneus KM 12 Pirenópolis / GO 72980-000 - Brasil
      <br />
      Salvador, Bahia. &copy;{new Date().getFullYear()} Pousada Refúgio da Serra <br />
      Todos os direitos reservados
    </footer>
  );
};

export default Footer;
