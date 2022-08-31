import "./App.css";
import { gsap } from "gsap";
import React from "react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

function App() {
  gsap.registerPlugin(ScrollTrigger);

  const revealRefs = useRef([]);
  revealRefs.current = [];

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  useEffect(() => {
    revealRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          autoAlpha: 0,
        },
        {
          duration: 1,
          autoAlpha: 1,
          ease: "none",
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: "top 100px",
            end: "top 200px",
            scrub: 1,
            pin: true,
            toggleActions: "restart pause resume none",
            markers: true,
          },
        }
      );
    });
  }, []);

  return (
    <div className="App">
      <div className="box1">
        <h3>Sample Text</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
          debitis esse, itaque quo atque maxime nisi vero laborum nesciunt
          cumque ab odio quaerat eaque dolor hic ipsa labore obcaecati, ipsam
          qui distinctio! Ducimus rerum asperiores earum autem quos facilis
        </p>
      </div>
      <div className="box2">
        <h3>Cards</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
          cumque?
        </p>
        <div className="box3 " ref={addToRefs}>
          <div className="div1">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos,
              animi?
            </p>
          </div>
          <div className="div1">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos,
              animi?
            </p>
          </div>
          <div className="div1">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos,
              animi?
            </p>
          </div>
        </div>
      </div>
      <div className="box4">hrllo</div>
    </div>
  );
}

export default App;
