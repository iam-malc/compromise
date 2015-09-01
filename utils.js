// ulilities
function in_rng(x,rng) {
  return rng[0] <= x && x <= rng[1]
}

function randI(a,b) {
  return Math.floor((Math.random() * (b-a)) + a);
}

function randR(a,b) {
  return Math.random() * (b-a) + a;
}

function vdot(vx, vy) {
  var ret = 0.0
  for (i = 0; i < vx.length; i++) {
    ret += vx[i] * vy[i]
  }
  return ret
}

