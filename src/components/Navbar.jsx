import ApplicationLogo from "./ApplicationLogo";
import ArrowButton from "./ArrowButton";

const Navbar = () => {
  return (
    <div className="bg-transparent absolute top-0 z-50 w-full">
      <header className="hidden md:flex items-center justify-between px-16 py-8 ">
        <ApplicationLogo />
        <nav>
          <ul className="flex items-center gap-[67px] text-sm neue-montreal-text">
            <li>
              <a href="/renovatie">Renovatie</a>
            </li>
            <li>
              <a href="/realisaties">Realisaties</a>
            </li>
            <li>
              <a href="/over-ons">Over ons</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
        <ArrowButton text="Gratis offerte" background="white" href="/contact" />
      </header>

      <header className="flex md:hidden items-center justify-between p-4 group">
        <label className="z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="14"
            viewBox="0 0 20 14"
            fill="none"
          >
            <path
              d="M0.664062 1.16667V0H19.3307V1.16667H0.664062ZM0.664062 14V12.8333H19.3307V14H0.664062ZM0.664062 7.58333V6.41667H19.3307V7.58333H0.664062Z"
              fill="white"
            />
          </svg>
          <input type="checkbox" hidden />
        </label>
        <div className="z-10">
          <ApplicationLogo />
        </div>

        <div className="z-10">
          <a href="/contact">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M18.0833 19.3333C16.1165 19.3333 14.1003 18.8409 12.0347 17.856C9.9691 16.871 8.05003 15.4885 6.27748 13.7085C4.50512 11.9288 3.12641 10.0098 2.14135 7.95163C1.15649 5.89344 0.664062 3.88094 0.664062 1.91413C0.664062 1.55771 0.780729 1.2607 1.01406 1.02309C1.2474 0.785476 1.53906 0.666672 1.88906 0.666672H4.77423C5.09137 0.666672 5.36806 0.76652 5.60431 0.966214C5.84076 1.16591 6.00088 1.42209 6.08469 1.73475L6.66335 4.51667C6.71722 4.84275 6.70749 5.12771 6.63419 5.37155C6.56088 5.61538 6.43148 5.81507 6.24598 5.97063L3.68631 8.35763C4.16484 9.2266 4.69392 10.0339 5.27356 10.7796C5.8532 11.5253 6.47134 12.2316 7.12798 12.8986C7.80542 13.5762 8.53459 14.2063 9.31548 14.7889C10.0962 15.3714 10.9532 15.9215 11.8865 16.4391L14.3814 13.8993C14.5714 13.6944 14.7849 13.5594 15.0219 13.4945C15.259 13.4293 15.5211 13.4162 15.8083 13.4551L18.2626 13.9576C18.5798 14.0354 18.8371 14.1951 19.0347 14.4368C19.232 14.6783 19.3307 14.9554 19.3307 15.2681V18.1083C19.3307 18.4583 19.2119 18.75 18.9743 18.9833C18.7367 19.2167 18.4397 19.3333 18.0833 19.3333ZM3.13885 7.26271L5.37798 5.20325C5.45265 5.14337 5.50126 5.06112 5.52381 4.95651C5.54617 4.8517 5.54238 4.75448 5.51244 4.66484L4.99415 2.19238C4.9642 2.0726 4.9119 1.98287 4.83723 1.92317C4.76237 1.86328 4.66515 1.83334 4.54556 1.83334H2.15156C2.06173 1.83334 1.98697 1.86328 1.92727 1.92317C1.86738 1.98287 1.83744 2.05763 1.83744 2.14746C1.8598 2.94469 1.98473 3.77701 2.21223 4.64442C2.43953 5.51203 2.74841 6.3848 3.13885 7.26271ZM12.9972 16.9866C13.7853 17.377 14.6255 17.6657 15.5178 17.8525C16.4099 18.0396 17.1873 18.1398 17.8499 18.1533C17.9398 18.1533 18.0145 18.1233 18.0742 18.0634C18.1341 18.0035 18.1641 17.9288 18.1641 17.8391V15.4968C18.1641 15.3772 18.1341 15.2799 18.0742 15.2051C18.0145 15.1304 17.9248 15.0781 17.805 15.0482L15.6467 14.606C15.557 14.5761 15.4786 14.5724 15.4113 14.5949C15.3438 14.6173 15.2728 14.6659 15.1981 14.7408L12.9972 16.9866Z"
                fill="white"
              />
            </svg>
          </a>
        </div>

        <div className="fixed inset-0 w-full h-full bg-bgBlack-300 group-has-[:checked]:max-w-full max-w-0 overflow-hidden transition-all duration-300 ease-in-out">
          <nav className="h-full p-4">
            <ul className="flex flex-col items-start justify-center gap-4 h-full text-white neue-montreal-text text-lg">
              <li>
                <a href="/renovatie">Renovatie</a>
              </li>
              <li>
                <a href="/realisaties">Realisaties</a>
              </li>
              <li>
                <a href="/over-ons">Over ons</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
