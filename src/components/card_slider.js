import React from 'react';
import './card_slider.css';
import jenish from './Images/jenish.jpg'
import biren from './Images/biren.jpeg'
import banti from './Images/banti.jpeg'
import vishv from './Images/vishv.jpeg'
import manthan from './Images/manthan.jpeg'

function card_slider() {
  return (
    <div>
      <div className="container-xxl">
        <div className="row">
          <div className="col-lg-3">
            <div className="card">
              <div className="face front-face">
                <img src={jenish}
                 alt="" className="rounded w-50 h-50 rounded-circle" />
                <div className="pt-3 text-uppercase name">
                  Jenish Kanpariya
                </div>
                <div className="designation">Full Stack Developer</div>
              </div>
              <div className="face back-face">
                <span className="fas fa-quote-left"></span>
                <div className="testimonial">
                  I made bacck the purchase price in just 48 hours! Thank you for making it pain less,
                  pleasant.
                  The service was execellent. I will refer everyone I know.
                </div>
                <span className="fas fa-quote-right"></span>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card">
              <div className="face front-face">
                <img src={biren}
                 alt="" className="rounded w-50 h-50 rounded-circle" />
                <div className="pt-3 text-uppercase name">
                  Gohel Biren
                </div>
                <div className="designation">Full Stack Developer</div>
              </div>
              <div className="face back-face">
                <span className="fas fa-quote-left"></span>
                <div className="testimonial">
                  Really good, you have saved our business! I made bacck the purchase price in just 48 hours!
                  man, this thing is getting better and better as I learn more about it.
                </div>
                <span className="fas fa-quote-right"></span>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card">
              <div className="face front-face">
                <img src={manthan}
                 alt="" className="rounded w-50 h-50 rounded-circle" />
                <div className="pt-3 text-uppercase name">
                  Manthan Gujjar
                </div>
                <div className="designation">Full Stack Developer</div>
              </div>
              <div className="face back-face">
                <span className="fas fa-quote-left"></span>
                <div className="testimonial">
                  Account keeper is the most valuable business research we have EVER purchased. Without
                  electrician, we would ahave gone bankrupt by now.
                </div>
                <span className="fas fa-quote-right"></span>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card">
              <div className="face front-face">
                <img src={vishv}
                 alt="" className="rounded w-50 h-50 rounded-circle" />
                <div className="pt-3 text-uppercase name">
                  Vishv Vamja
                </div>
                <div className="designation">Full Stack Developer</div>
              </div>
              <div className="face back-face">
                <span className="fas fa-quote-left"></span>
                <div className="testimonial">
                  Account keeper is the most valuable business research we have EVER purchased. Without
                  electrician, we would ahave gone bankrupt by now.
                </div>
                <span className="fas fa-quote-right"></span>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card">
              <div className="face front-face">
                <img src={banti}
                 alt="" className="w-50 h-50 rounded-circle" />
                <div className="pt-3 text-uppercase name">
                  Banti Tiwari
                </div>
                <div className="designation">Full Stack Developer</div>
              </div>
              <div className="face back-face">
                <span className="fas fa-quote-left"></span>
                <div className="testimonial">
                  Account keeper is the most valuable business research we have EVER purchased. Without
                  electrician, we would ahave gone bankrupt by now.
                </div>
                <span className="fas fa-quote-right"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default card_slider
