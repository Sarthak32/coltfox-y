import React,{useEffect,useRef,useState} from 'react'
import "./Ourservicesinside.css"
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Ourservicesinside = () => {
  const page3Ref = useRef(null); // Reference to the page3 div

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 0.5, ease: 'power2.inOut' } });

    // Animation for the paths

    // Animation for the text content on page 3

    // Set up ScrollTrigger for the animation
    ScrollTrigger.create({
      trigger: page3Ref.current, // Use the ref of page3 div as the trigger
      start: 'top center', // Adjust as needed
      end: '+=300%', // Adjust as needed
      animation: tl,
      scrub: true, // Smooth scrubbing
      pin: true, // Pin the animation until it's complete
    });
  }, []);
  return (
    <div className="Ourservicesinside">
      <div className="Ourservicesinside-title">Big ideas GIANT results with performance marketing</div>
      <div className="Ourservicesinside-page2">
        <div className="perf-mar-btn">PERFORMANCE MARKETING</div>
        <div className="Ourservicesinside-page2-title">Creative solutions for measurable results.</div>
        <div className="Ourservicesinside-page2-des">We use a strategic, creative, and integrative approach that delivers impressive success aligned with your mission.</div>
        <div className="Ourservicesinside-page2-img"><img src='./perf-mar-img.png' /></div>
      </div>
      <div className="Ourservicesinside-page3">
        <div className="Ourservicesinside-page3-cont">
        <div className="Ourservicesinside-page3-left">
          <div className="our-app-btn">Our Approach</div>
          <div className="Ourservicesinside-page3-title">We Think BIG.</div>
          <div className="Ourservicesinside-page3-sub"><div className="Ourservicesinside-page3-srno">01</div>Our Approach</div>
          <div className="Ourservicesinside-page3-line-des" />
          <div className="Ourservicesinside-page3-des">Lorem ipsum dolor sit amet. Ut ducimus officia quo ducimus corrupti sed eius saepe aut atque consectetur? Sit magnam iure ab asperiores laboriosam ex reprehenderit dolores sed earum vero vel nihil excepturi id nihil voluptas.Sit autem consectetur ut aliquam omnis sed odio magni vel dolores assumenda ab sunt iusto est deleniti accusamus eum fugiat tempora? Ut repellendus galisum sed fugiat adipisci sit distinctio voluptate ut assumenda dicta et voluptatum dolor et harum voluptatibus.</div>
        </div>
        <div className="Ourservicesinside-page3-right">
        <svg width="461" height="649" viewBox="0 0 461 649" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M359.056 117.971C236.727 184.252 176.171 106.31 59.4916 220.462C21.3521 257.002 7.22611 306.855 1.57579 360.673C-2.09692 408.26 1.57545 506.55 3.27067 554.704C10.0511 544.506 7.22593 531.76 16.549 522.129C25.0244 478.225 80.9626 432.904 122.775 419.591C163.457 406.561 266.011 397.78 286.352 438.569C295.392 428.938 308.953 433.47 323.079 417.325C337.487 400.896 344.268 375.119 349.918 369.171C308.671 373.42 297.652 387.299 253.862 362.373C217.135 341.695 217.418 326.683 199.337 295.525C183.59 325.929 163.675 342.478 114.185 336.03C112.49 309.687 135.488 284.194 157.807 272.581C189.166 256.152 211.202 268.615 241.432 275.98C290.024 287.593 375.627 277.113 404.726 234.908C414.614 221.595 431.848 187.887 432.413 172.025C417.722 177.407 397.663 205.166 362.914 211.681C386.08 188.17 419.417 170.325 425.067 129.82C399.358 146.532 395.12 160.695 357.828 169.192C371.672 158.145 402.749 129.82 404.726 111.691C400.206 113.108 369.792 128.281 359.056 133.096C344.366 139.895 322.712 152.306 307.159 156.693C322.712 149.281 344.931 137.798 359.056 117.971Z" fill="url(#paint0_linear_1111_1133)" />
      <path fillRule="evenodd" clipRule="evenodd" d="M354.192 122.217C327.088 144.853 324.665 145.209 298.113 160.94C319.234 157.914 338.897 147.167 353.588 140.368C364.324 135.553 392.196 119.398 396.434 117.982C394.456 136.11 373.502 159.473 348.042 173.636C392.209 162.755 393.276 154.339 416.951 136.738C411.301 177.527 364.45 208.738 353.127 216.124C387.877 209.609 409.106 188.166 424.796 177.881C424.231 193.743 407.529 230.195 397.641 243.225C464.879 183.458 482.237 77.6121 427.994 0C418.671 29.4586 413.303 45.8875 395.787 72.2303C387.877 84.4103 371.692 107.091 354.192 122.217Z" fill="url(#paint1_linear_1111_1133)" />
      <path d="M50.5808 617.489C60.7441 617.489 72.7183 630.272 70.9073 649.009H0.545574C0.545574 649.009 -1.4125 392.664 2.09072 354.425C5.59395 316.185 21.1103 256.702 51.4251 229.793C37.2951 352.212 155.711 352.746 202.403 290.693C242.179 365.631 278.034 381.744 355.13 365.755C327.184 453.429 242.617 459.228 237.756 459.228C232.896 459.228 86.9357 427.25 53.1217 552.702L50.5808 617.489Z" fill="#F22929" />
      <mask id="mask0_1111_1133" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="229" width="356" height="421">
        <path d="M50.5808 617.489C60.744 617.489 72.7182 630.272 70.9072 649.009H0.545524C0.545524 649.009 -1.41255 392.664 2.09067 354.425C5.5939 316.185 21.1102 256.702 51.425 229.793C37.2951 352.212 155.711 352.746 202.403 290.693C242.179 365.631 278.034 381.744 355.13 365.755C327.184 453.429 242.617 459.229 237.756 459.229C232.896 459.229 86.9357 427.25 53.1216 552.702L50.5808 617.489Z" fill="#DF2323" />
      </mask>
      <g mask="url(#mask0_1111_1133)">
        <path d="M-28.6562 566.432C-28.6562 475.779 68.023 402.145 173.343 402.145C278.663 402.145 364.041 475.633 364.041 566.286V577.907C364.041 668.56 278.663 753.728 173.343 753.728C68.023 753.728 -25.8311 695.324 -25.8311 604.671L-28.6562 566.432Z" fill="url(#paint2_linear_1111_1133)" />
      </g>
      <defs>
        <linearGradient id="paint0_linear_1111_1133" x1="321.756" y1="197.727" x2="70.5941" y2="303.552" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FCAB64" />
          <stop offset="0.755208" stopColor="#FD504F" />
        </linearGradient>
        <linearGradient id="paint1_linear_1111_1133" x1="445.846" y1="22.6605" x2="376.322" y2="186.819" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FCC391" />
          <stop offset="1" stopColor="#1F1F21" />
        </linearGradient>
        <linearGradient id="paint2_linear_1111_1133" x1="141.278" y1="426.838" x2="34.5943" y2="646.84" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1F1F21" />
          <stop offset="1" stopColor="#FCC391" />
        </linearGradient>
      </defs>
    </svg>
        </div>
        </div>
        <div className="Ourservicesinside-page3-end">LEARN MORE<img src='./ourser-page3-endimg.png' /></div>
      </div>
      <div className="Ourservicesinside-page4">
        <div className="supp-sol-btn">Supporting Solutions</div>
        <div className="Ourservicesinside-page4-r">
        <div className="Ourservicesinside-page4-title">Create unexpected experiences. Incite curiosity. Change behaviours.</div>
        <div className="Ourservicesinside-page4-sub">We focus on strategic, data-driven solutions to amplify your message.</div>
        <div className="Ourservicesinside-page4-main">
          <div className="Ourservicesinside-page4-main-cont">
            <div className="Ourservicesinside-page4-cont-t">Media Planning</div>
            <img src='./plus.png' />
          </div>
          <div className="ourser-blackline" />

          <div className="Ourservicesinside-page4-main-cont">
            <div className="Ourservicesinside-page4-cont-t">Performance Creative</div>
            <img src='./plus.png' />
          </div>
          <div className="ourser-blackline" />

          <div className="Ourservicesinside-page4-main-cont">
            <div className="Ourservicesinside-page4-cont-t">SEM (Search Engine Marketing)</div>
            <img src='./plus.png' />
          </div>
          <div className="ourser-blackline" />

          <div className="Ourservicesinside-page4-main-cont">
            <div className="Ourservicesinside-page4-cont-t">Paid Digital & Social Media</div>
            <img src='./plus.png' />
          </div>
          <div className="ourser-blackline" />

          <div className="Ourservicesinside-page4-main-cont">
            <div className="Ourservicesinside-page4-cont-t">Programmatic Media Buying</div>
            <img src='./plus.png' />
          </div>
          <div className="ourser-blackline" />
          <div className="Ourservicesinside-page4-main-cont">
            <div className="Ourservicesinside-page4-cont-t">Direct Response Marketing</div>
            <img src='./plus.png' />
          </div>
          <div className="ourser-blackline" />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Ourservicesinside