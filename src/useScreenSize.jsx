import { useEffect } from "react";

const useScreenSize = (setShowMenu, setOpenBackdrop) => {

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    if (window.innerWidth >= "1149") {
      var close = document.getElementById("btn-close-menu");
      close.style.display = "none";
      var burguer = document.getElementById("btn-burguer-menu");
      burguer.style.display = "block";
      var res_search = document.getElementById("row-search-res");
        res_search.style.display = "none"; 
        var res_menu = document.getElementById("responsive-menu");
        res_menu.style.display = "block"; 
      setShowMenu(false);
      setOpenBackdrop(false);
    }
  };

};

export default useScreenSize;