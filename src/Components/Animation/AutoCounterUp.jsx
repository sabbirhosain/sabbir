// https://www.npmjs.com/package/react-countup
// https://github.com/glennreyes/react-countup
import CountUp from 'react-countup';

const AutoCounterUp = ({ start, end, duration }) => {
  return (
    <>
      <CountUp start={start} end={end} decimal="," duration={duration} />
    </>
  )
}

export default AutoCounterUp

{/* <AutoCounterUp start={0} end={100} duration={5} /> */}