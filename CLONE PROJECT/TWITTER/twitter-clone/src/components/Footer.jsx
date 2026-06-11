import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className="text-sm text-gray-500 h-25">
          <div className="footer flex gap-1 flex-wrap justify-between w-[90%] mx-auto">
            <div className="flex flex-1/3 justify-around">
              <a href="">Terms of Service</a>
              <span> </span>
              <span>|</span>
            </div>
            <div className="flex flex-1/3 justify-around">
              <a href="">Privacy Policy</a>
              <span> </span>
              <span>|</span>
            </div>
            <div clsassName="flex flex-1/3 justify-around">
              <a href="">Cookie Policy</a>
              <span> </span>
              <span>|</span>
            </div>
            <div className="flex gap-1">
              <a href="">Accessibility</a>
              <span> </span>
              <span>|</span>
            </div>
            <div className="flex gap-1">
              <a href="">Ads info</a>
              <span> </span>
              <span>|</span>
            </div>

            <button>
              <div className="flex gap-1">
                <span>More</span>
                <span>...</span>
              </div>
            </button>
            <span>© 2023 Twitter, Inc.</span>
          </div>
        </div>
    </div>
  )
}

export default Footer
