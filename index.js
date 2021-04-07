function distanceFromHqInBlocks(blocks) {
    return Math.abs (42 - (blocks));
}

function distanceFromHqInFeet(feet){
    return (distanceFromHqInBlocks(feet) * 264);
}

function distanceTravelledInFeet(north, south) {
    return Math.abs ((north - south) * 264);
}

function calculatesFarePrice(start, destination) {
      const travel = (Math.abs (start - destination) * 264)
      const price = 0.02
        
        if (travel < 400) {
        return price * 0
        }
        else if (400 < travel < 1999) {
        return (2.56)
        }
        else if (2000 < travel < 2500) {
        return 25
        }
        else if (2500 < travel){
        return "cannot travel that far"
        }
}





