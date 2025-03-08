import Icon from "@/conponents/common/Icon";

function HeaderNavigation() {
  return (
    <div className="header-navigation">
      <button
        type="button"
        className="hambuger-menu"
      >
        <Icon name="hambuger_menu" />
      </button>
    </div>
  );
}

export default HeaderNavigation;
