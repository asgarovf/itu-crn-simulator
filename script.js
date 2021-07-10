$(document).ready(() => {
  const version = "beta 0.1";

  let time = Date.now();

  $("#version").html(`version: ${version}`);

  $("#save").click((e) => {
    e.preventDefault();
    let newTime = Date.now();

    $("#time").html((newTime - time) / 1000);
    $("#reset").removeClass("d-none");
  });

  $("#reset").click(() => {
    window.location.reload(false);
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
