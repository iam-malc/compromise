// ulilities
function range(start, end) {
  var foo = [];
  for (var i = start; i <= end; i++) {
      foo.push(i);
  }
  return foo;
}

function in_rng(x,rng) {
  return rng[0] <= x && x <= rng[1]
}

function soft_in_rng(x,rng) {
  if (in_rng(x, rng)) {
    return 1.0
  } else {
    return 1.0 / (1 +
        Math.min(Math.abs(x-rng[0]), Math.abs(x-rng[1]))
      )
  }
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

function vadd(vx, vy) {
  ret = []
  for (var i = 0; i < vx.length; i++) {
    ret.push(vx[i] + vy[i])
  }
  return ret
}

function vsub(vx, vy) {
  ret = []
  for (var i = 0; i < vx.length; i++) {
    ret.push(vx[i] - vy[i])
  }
  return ret
}

function vscale(vx, a){
  ret = []
  for (var i = 0; i < vx.length; i++) {
    ret.push(vx[i] * a)
  }
  return ret
}

function mag(v) {
  ret = 0
  for (var i = 0; i < v.length; i++) {
    ret += v[i] * v[i]
  }
  return Math.sqrt(ret)
}

function vdist(x, y) {
  return mag(vsub(x, y))
}

function fitness_sort_fun(a, b) {
  if (a[0] === b[0]) {
      return 0;
  }
  else {
      return (a[0] < b[0]) ? -1 : 1;
  }
}

function randomreal(min, max) {
    return Math.random() * (max - min) + min;
}

// update the range (binary search style) to half including the good point
function get_half_range(score, good_point, range) {
  score = 0.5
  ret = []
  for (var i = 0; i < good_point.length; i++) {
    var ptpt = good_point[i]
    var rnrn = range[i]
    var new_front = rnrn[0] * (1 - score) + ptpt * score
    var new_back = ptpt * score + (1 - score) * rnrn[1]
    ret.push([new_front, new_back])
  }
  return ret
}
