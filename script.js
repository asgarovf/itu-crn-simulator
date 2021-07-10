$(document).ready(() => {
  const version = "beta 0.2";

  let time = Date.now();

  $("#version").html(`version: ${version}`);

  $("#save").click((e) => {
    e.preventDefault();
    let newTime = Date.now();

    const group = $(".form-group");

    let flag = false;
    for (let i = 1; i <= group.length; i++) {
      if (
        document.querySelector(`.form-group:nth-child(${i}) div input`)
          .value !== ""
      ) {
        flag = true;
      }
    }

    if (!flag) {
      alert("Lütfen bir CRN Giriniz.");
      throw new Error("Empty crn");
    }

    $("#time").html((newTime - time) / 1000);
    $("#reset").removeClass("d-none");
  });

  $("#reset").click(() => {
    window.location.reload(false);
  });

  $("#clear").click((e) => {
    e.preventDefault();

    const group = $(".form-group");

    for (let i = 1; i <= group.length; i++) {
      document.querySelector(`.form-group:nth-child(${i}) div input`).value =
        "";
    }
  });
});

function add() {
  $("form .row").append(`
    <div class="form-group col-md-3">
      <div>
        <input
          class="form-input"
          type="number"
          placeholder="CRN Giriniz."
        />
        <div class="close">
          <i class="fas fa-minus"></i>
        </div>
        <div class="add"  onclick="add()">
          <i class="fas fa-plus"></i>
        </div>
      </div>
  </div>
    `);
}
