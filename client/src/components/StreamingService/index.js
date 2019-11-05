import React, { Component } from "react";
import "./style.css";

class StreamingService extends Component {

  render() {
    return (
      <div className="streaming-buttons">
        <button className="netflix"><img src="https://cdn.vox-cdn.com/thumbor/Yq1Vd39jCBGpTUKHUhEx5FfxvmM=/39x0:3111x2048/1200x800/filters:focal(39x0:3111x2048)/cdn.vox-cdn.com/uploads/chorus_image/image/49901753/netflixlogo.0.0.png"></img></button>

        <button className="hulu"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAACjCAMAAAA3vsLfAAAAkFBMVEUAAAAc54MjIyNaWlod7occ64UUekMPgkoWuGgDGg4ToVsd74cRi08b4oAb3n4LWTIJTSsb03cIIxIWl1QVrGENckEFLRka2XsACAQXvWse9osGNB0FKhgYxnAUpl4VsGQXmVQDFQwABgMNajwISCgKVjEHHQ8Qh0wHPiMLYDYYw28HPCIZznQRklMVfUQLRSZUENuRAAADOElEQVR4nO3bbV/aMBTG4XZLilBAqiAiKD6j+PT9v93mapuTLqVtrNq5//XO5nA09y8iTWPwAx4CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoLuG8yQzf2q9e2S6J2etd/9C50pn1KD17hvRfa/17l/oUIcZ3X5sPWW6E1ttxOaF2LwQmxdi80JsXojNC7F5ITYvxOaF2LwQm5f/JrbjfubYVX6RD/dv7YK+a8Qdmyy9tJrcipE2Z9k6Gdtimoy1yujR4+CmWL6N8/GTyBoZKTNyn110xxaKJhPZ4ygWTQ7an2x7RGyh1uKLP1/H855dvjAVamaNjM3r1H520R3byJTGdmzyh/lnYnPQKlnK8lqxxfVjU98zttclJ2dGbKnK2EIdivVGbKnq2EL9aMqJLVUjtjC+ysuJLVUnNr3Iy4ktVSe2UOflxJYqxvb2VNO+aD5dEVvKik2r8Tw1VvK6SYjYUtZdQnKdX5/MxYDaZJeJLWWttr4YWMnVNsyuEltK3sqvrRGZELEVlO+3TYmtHLF5ITYvxOaF2LwQm5d3xPZslcud7gab4tbTiqUp/7axiX2R327EjE0W7tjEwrS/Z0/G1ulHVw1jWztvuYLgIBED8V122R2bvG/T96bJSyiYXZcuahjbwLrDT6ZvFtaeicp7uGM7tYofsyZbsdbCcPQJk/fXMLbImlp+et7eaBrnPdyxnenqJnr7CZP31zC2Bys2N3Fv645tVqOJav9/S9rUMDbrfalEbD6ZuGM7rrGjrF4+fu7v0DS2TY2VYnqUHJ1ZV+Ymn5Z1UdPYgnHVlGPx61US26oytlj8ge2ixrFdVSw3nYgeZQe1oriiifWZsIMaxxYMd05Zj45Eben5tsHuJnPnKbEOaR5bEBUfbAlq9CBLy48FDuMdTZJO3yG88ogtWE21ck1aK3VmL5Mdpykf9lRJE334ITNt1flJfhAvtv9Rdi0O7xU/RPU3W3EMMDtGePq0KtRtRPe/3q5Ww1NHk23vouUpfoTJc5R5ts9O7ouRa8crlzezSLgrRvbqRfRw/m20m8yWnd72AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAISf8PALaY1KBHBDC9IAAAAASUVORK5CYII="></img></button>

        <button className="amazon-prime">AP</button>
        <button className="apple-tv">AT</button>
      </div>
    )
  }
}

export default StreamingService;
