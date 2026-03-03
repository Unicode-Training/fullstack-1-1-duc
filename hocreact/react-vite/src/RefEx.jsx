import { useEffect, useRef, useState } from "react";

export default function RefEx() {
  const sidebarRef = useRef();
  const [isOpen, setOpen] = useState(true);
  const currentWidthRef = useRef();
  const handleMouseDown = () => {
    document.addEventListener("mousemove", handleDrag);
    document.body.classList.add("select-none");
  };
  const handleDrag = (e) => {
    let clientX = e.clientX;
    if (clientX < 180) {
      clientX = 180;
    }
    if (clientX > 330) {
      clientX = 330;
    }
    sidebarRef.current.style.width = `${clientX}px`;
    currentWidthRef.current = clientX;
  };
  const handleToggle = () => {
    setOpen(!isOpen);
  };
  useEffect(() => {
    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleDrag);
      document.body.classList.remove("select-none");
    };
    document.addEventListener("mouseup", handleMouseUp);
  }, []);
  useEffect(() => {
    const width = currentWidthRef?.current ?? 220;
    sidebarRef.current.style.width = isOpen ? `${width}px` : 0;
  }, [isOpen]);
  return (
    <div>
      <button onClick={handleToggle}>{isOpen ? "Đóng" : "Mở"}</button>
      <div className="box">
        <div className="sidebar" ref={sidebarRef}>
          <div className="resize-bar" onMouseDown={handleMouseDown}></div>
          <h2>Sidebar</h2>
        </div>
        <div className="content">
          <h2>Content</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            necessitatibus est illum vel aperiam totam excepturi accusamus
            sapiente deleniti repellat modi itaque, magnam alias ab! Eum sed
            nesciunt hic inventore!
          </p>
        </div>
      </div>
    </div>
  );
}
