// https://www.npmjs.com/package/react-type-animation
// https://github.com/maxeth/react-type-animation#readme
// https://react-type-animation.netlify.app/

import { TypeAnimation } from 'react-type-animation';

const AutoTyper = () => {
  return (
    <>
      <TypeAnimation
        sequence={[
          'Web Designe',
          2000, // duration 2s
          'Web Development',
          2000, // duration 2s
          'WP Customization',
          2000, // duration 2s
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: '1em', display: 'inline-block' }}
        repeat={Infinity}
      />
    </>
  )
}

export default AutoTyper