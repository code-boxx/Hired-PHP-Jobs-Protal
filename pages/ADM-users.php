<?php
$_PMETA = ["load" => [
  ["s", HOST_ASSETS."ADM-users.js", "defer"]
]];
require PATH_PAGES . "TEMPLATE-atop.php"; ?>
<!-- (A) HEADER -->
<div class="d-flex align-items-center mb-3">
  <h3 class="flex-grow-1">MANAGE USERS</h3>
  <button class="btn btn-primary mi" onclick="usr.addEdit()">
    add
  </button>
</div>

<!-- (B) SEARCH BAR -->
<form class="d-flex align-items-stretch bg-white border mb-3 p-2" onsubmit="return usr.search()">
  <input type="text" id="user-search" placeholder="Search" class="form-control form-control-sm"/>
  <select id="user-search-role" class="form-control form-control-sm" style="width:130px">
    <option value="">All Active</option>
    <?php foreach (USER_ROLES as $code=>$role) { ?>
    <option value="<?=$code?>"><?=$role?></option>
    <?php } ?>
  </select>
  <button class="btn btn-primary mi">
    search
  </button>
</form>

<!-- (B) USERS LIST -->
<div id="user-list" class="bg-white zebra my-4"></div>
<?php require PATH_PAGES . "TEMPLATE-abottom.php"; ?>
