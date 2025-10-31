const ApplicationLogo = ({ width = "146px", height="24px" }) => {
  return (
    <a href="/">
      <img src="/logo.png" alt="Renovise." style={{ width, height }} />
    </a>
  );
};

export default ApplicationLogo;
