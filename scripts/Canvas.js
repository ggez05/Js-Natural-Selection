function circleCreate(ctx, x, y, color) {
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.arc(x, y, 10, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();
}
var arrBullets = [];
var arrTargets = [];

$(function () {
  var ctx = document.getElementById("canvas").getContext("2d");
  ctx.globalAlpha = 0.1;

  var firstBullet = new bullet(
    100,
    100,
    Math.random() * 4 - 2,
    Math.random() * 4 - 2
  );

  arrBullets.push(firstBullet);
  createNewTarget(arrTargets);

  $("canvas").click(function () {
    createNewTarget(arrTargets);
  });

  function draw() {
    $(".counter").text(arrTargets.length);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < arrBullets.length; i++) {
      circleCreate(ctx, arrBullets[i].X, arrBullets[i].Y, "red");
      moveBullet(arrBullets[i]);
    }

    hop: for (let i = 0; i < arrTargets.length; i++) {
      for (let j = 0; j < arrTargets.length; j++) {
        if (
          arrTargets.length > 1 &&
          distanceCalc(arrTargets[i], arrTargets[j]) < 22 &&
          i != j
        ) {
          reverseOnCollision(arrTargets[i], arrTargets[j]);
          if (distanceCalc(arrTargets[i], arrTargets[j]) < 14) {
            killOneOff(arrTargets, i, j);
            break hop;
          }
        }
      }
      const colour = arrTargets[i].Sex == "Male" ? "green" : "pink";
      circleCreate(ctx, arrTargets[i].X, arrTargets[i].Y, colour);
      moveTarget(arrTargets[i], firstBullet);
    }

    dance: for (let i = 0; i < arrTargets.length; i++) {
      if (distanceCalc(arrTargets[i], firstBullet) < 20) {
        arrTargets.splice(i, 1);
        break;
      }

      for (let j = 0; j < arrTargets.length; j++) {
        if (canMate(arrTargets, i, j)) {
          mateTargets(arrTargets, i, j);
          arrTargets[i].LastMated = arrTargets[i].Age;
          arrTargets[j].LastMated = arrTargets[j].Age;
          break dance;
        }
      }
    }
  }

  draw();
  var timer = setInterval(function () {
    draw();
    if (ctx.globalAlpha < 1) {
      ctx.globalAlpha += 0.01;
    }
  }, 10);

  var tableTimer = setInterval(function () {
    $("tbody").html("");

    for (var i = 0; i < arrTargets.length; i++) {
      $("tbody").append(
        "<tr><td>" +
          arrTargets[i].CentralG.A.toFixed(2) +
          "</td>" +
          "<td>" +
          arrTargets[i].CentralG.B.toFixed(2) +
          "</td>" +
          "<td>" +
          arrTargets[i].CentralG.C.toFixed(2) +
          "</td>" +
          "<td>" +
          arrTargets[i].CentralG.D.toFixed(2) +
          "</td>" +
          "<td>" +
          arrTargets[i].RadialG.A.toFixed(2) +
          "</td>" +
          "<td>" +
          arrTargets[i].RadialG.B.toFixed(2) +
          "</td>" +
          "<td>" +
          arrTargets[i].RadialG.C.toFixed(2) +
          "</td>" +
          "<td>" +
          arrTargets[i].RadialG.D.toFixed(2) +
          "</td>" +
          "<td>" +
          arrTargets[i].Age +
          "</td>" +
          "<td>" +
          arrTargets[i].Sex +
          "</td></tr>"
      );
    }
  }, 3000);

  var mutantInserter = setInterval(function () {
    createNewTarget(arrTargets);
  }, 20000);

  function stop() {
    clearInterval(timer);
  }
});
