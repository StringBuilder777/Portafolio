import React, { useEffect, useRef } from 'react';
import './BalatroMenu.css';

const BalatroMenu = () => {
  const timeRef = useRef(0);

  useEffect(() => {
    const update = () => {
      timeRef.current += 1 / 120;
      requestAnimationFrame(update);
    };
    requestAnimationFrame(update);

    if (window.shaderWebBackground) {
      window.shaderWebBackground.shade({
        shaders: {
          image: {
            uniforms: {
              iResolution: (gl, loc, ctx) => gl.uniform2f(loc, ctx.width, ctx.height),
              iTime: (gl, loc) => gl.uniform1f(loc, timeRef.current),
            },
          },
        },
      });
    }
  }, []);

  return (
    <>
      <div className="bg"></div>
      <main>
        <h1>mod name</h1>
        <p>
          this is a mod that adds x, y, and z. <br />
          it also adds foo and bar.
        </p>
        <br />
        <h2>download link</h2>
        <br />
        <a href="https://example.com" id="download">download</a>
        <br />
        <br />
        <div className="jokersfull">
          <h2>jokers</h2>
          <br />
          <div className="jokers cards"></div>
          <br />
        </div>
        <div className="consumablesfull">
          <h2>consumables</h2>
          <br />
          <div className="consumables cards"></div>
          <br />
        </div>
        <div className="cardmodsfull">
          <h2>card modifications</h2>
          <br />
          <div className="cardmods cards"></div>
          <br />
        </div>
        <div className="decksfull">
          <h2>decks</h2>
          <br />
          <div className="decks cards"></div>
          <br />
        </div>
        <div className="stickersfull">
          <h2>stickers</h2>
          <br />
          <div className="stickers cards"></div>
          <br />
        </div>
        <div className="blindsfull">
          <h2>blinds</h2>
          <br />
          <div className="blinds cards"></div>
          <br />
        </div>
        <div className="shopitemsfull">
          <h2>shop items</h2>
          <br />
          <div className="shopitems cards"></div>
          <br />
        </div>
      </main>
    </>
  );
};

export default BalatroMenu;