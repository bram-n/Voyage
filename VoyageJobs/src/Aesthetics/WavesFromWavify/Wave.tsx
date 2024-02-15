import Wave from 'react-wavify'

function Wavevify() {
    return ( color: string = "#FCEDDA", 
    isPaused: boolean = false, 
    height: any = 20, 
    amplitude: number = 20, 
    speed: number = 20,
    points: number = 3) => (
    <Wave fill={color}
        paused={isPaused}
        options={{
          height: height,
          amplitude: amplitude,
          speed: speed,
          points: points
        }}
  /> );
}

export default Wavevify;
