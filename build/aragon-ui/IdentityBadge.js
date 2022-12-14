'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var slicedToArray = require('./slicedToArray-0711941d.js');
require('./unsupportedIterableToArray-68db1d3b.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./_commonjsHelpers-72d386ba.js');
var index = require('./index-b0606964.js');
require('./defineProperty-0921a47c.js');
require('./toConsumableArray-d8a4a2c3.js');
var _styled = require('styled-components');
var _styled__default = _interopDefault(_styled);
require('./getPrototypeOf-2a661a20.js');
require('./color.js');
require('./components.js');
require('./contains-component.js');
require('./css.js');
require('./dayjs.min-e07657bf.js');
require('./date.js');
require('./miscellaneous.js');
var environment = require('./environment.js');
require('./font.js');
require('./math-f4029164.js');
require('./characters.js');
require('./format.js');
require('./keycodes.js');
require('./url.js');
var web3 = require('./web3.js');
var constants = require('./constants.js');
require('./breakpoints.js');
require('./springs.js');
var textStyles = require('./text-styles.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./Theme.js');
var _extends$1 = require('./extends-40571110.js');
var objectWithoutProperties = require('./objectWithoutProperties-35db8ab0.js');
require('./index-ecc57c9f.js');
require('./isObject-ec755c87.js');
require('./Viewport-15101437.js');
require('./Layout.js');
require('./FocusVisible.js');
require('./ButtonBase.js');
require('./IconPropTypes-56de5759.js');
require('./IconAddUser.js');
require('./IconAlert.js');
require('./IconAlignCenter.js');
require('./IconAlignJustify.js');
require('./IconAlignLeft.js');
require('./IconAlignRight.js');
require('./IconAragon.js');
require('./IconArrowDown.js');
require('./IconArrowLeft.js');
require('./IconArrowRight.js');
require('./IconArrowUp.js');
require('./IconAtSign.js');
require('./IconBlock.js');
require('./IconBookmark.js');
require('./IconCalendar.js');
require('./IconCanvas.js');
require('./IconCaution.js');
require('./IconCenter.js');
require('./IconChart.js');
require('./IconChat.js');
require('./IconCheck.js');
require('./IconChip.js');
require('./IconCircleCheck.js');
require('./IconCircleMinus.js');
require('./IconCirclePlus.js');
require('./IconClock.js');
require('./IconCloudDownload.js');
require('./IconCloudUpload.js');
require('./IconCoin.js');
require('./IconConfiguration.js');
require('./IconConnect.js');
require('./IconConnection.js');
require('./IconConsole.js');
require('./IconCopy.js');
require('./IconCross.js');
require('./IconDashedSquare.js');
require('./IconDown.js');
require('./IconDownload.js');
require('./IconEdit.js');
require('./IconEllipsis.js');
require('./IconEnter.js');
require('./IconEthereum.js');
require('./IconExternal.js');
require('./IconFile.js');
require('./IconFilter.js');
require('./IconFlag.js');
require('./IconFolder.js');
require('./IconGraph2.js');
require('./IconGraph.js');
require('./IconGrid.js');
require('./IconGroup.js');
require('./IconHash.js');
require('./IconHeart.js');
require('./IconHide.js');
require('./IconHome.js');
require('./IconImage.js');
require('./IconInfo.js');
require('./IconLabel.js');
require('./IconLayers.js');
require('./IconLeft.js');
require('./IconLink.js');
require('./IconLocation.js');
require('./IconLock.js');
require('./IconMail.js');
require('./IconMaximize.js');
require('./IconMenu.js');
require('./IconMinimize.js');
require('./IconMinus.js');
require('./IconMove.js');
require('./IconNoPicture.js');
require('./IconPicture.js');
require('./IconPlus.js');
require('./IconPower.js');
require('./IconPrint.js');
require('./IconProhibited.js');
require('./IconQuestion.js');
require('./IconRefresh.js');
require('./IconRemoveUser.js');
require('./IconRight.js');
require('./IconRotateLeft.js');
require('./IconRotateRight.js');
require('./IconSearch.js');
require('./IconSettings.js');
require('./IconShare.js');
require('./IconSquareMinus.js');
require('./IconSquarePlus.js');
require('./IconSquare.js');
require('./IconStarFilled.js');
require('./IconStar.js');
require('./IconSwap.js');
require('./IconTarget.js');
require('./IconToken.js');
require('./IconTrash.js');
require('./IconUnlock.js');
require('./IconUp.js');
require('./IconUpload.js');
require('./IconUser.js');
require('./IconView.js');
require('./IconVote.js');
require('./IconWallet.js');
require('./IconWarning.js');
require('./IconWorld.js');
require('./IconWrite.js');
require('./IconZoomIn.js');
require('./IconZoomOut.js');
require('./objectWithoutPropertiesLoose-1af20ad0.js');
require('react-dom');
require('./web-d0294535.js');
require('./Button.js');
require('./ButtonIcon.js');
require('./getDisplayName-7ab6d318.js');
require('./index-bc84a358.js');
require('./Link.js');
require('./TextInput.js');
require('./ToastHub.js');
require('./index-0db71dc1.js');
require('./RootPortal.js');
require('./TextCopy.js');
require('./taggedTemplateLiteral-227ed122.js');
require('./_react_commonjs-external-bf8fc71c.js');
var EthIdenticon = require('./EthIdenticon.js');
require('./AddressField.js');
var BadgeBase = require('./BadgeBase.js');
var BadgePopoverActionType = require('./BadgePopoverActionType.js');
require('./Tag.js');
require('./proptypes-5b34673d.js');
require('./Popover.js');
require('./observe.js');
require('./index-030bfca8.js');
require('./providers.js');
require('./BadgePopoverBase.js');
var IdentityBadgePopover = require('./IdentityBadgePopover.js');

var _StyledDiv = _styled__default("div").withConfig({
  displayName: "IdentityBadge___StyledDiv",
  componentId: "q71pax-0"
})(["display:block;margin-right:", "px;", ";"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
});

var IdentityBadge = React__default.memo(function IdentityBadge(_ref) {
  var badgeOnly = _ref.badgeOnly,
      compact = _ref.compact,
      connectedAccount = _ref.connectedAccount,
      entity = _ref.entity,
      label = _ref.label,
      labelStyle = _ref.labelStyle,
      networkType = _ref.networkType,
      popoverAction = _ref.popoverAction,
      popoverTitle = _ref.popoverTitle,
      shorten = _ref.shorten,
      customLabel = _ref.customLabel,
      fontSize = _ref.fontSize,
      props = objectWithoutProperties._objectWithoutProperties(_ref, ["badgeOnly", "compact", "connectedAccount", "entity", "label", "labelStyle", "networkType", "popoverAction", "popoverTitle", "shorten", "customLabel", "fontSize"]);

  if (customLabel) {
    environment.warnOnce('IdentityBadge:customLabel', 'The ???customLabel??? prop is deprecated. Please use ???label??? instead.');
    label = label || customLabel;
  }

  if (fontSize) {
    environment.warnOnce('IdentityBadge:fontSize', 'The ???fontSize??? prop is deprecated. Please use ???labelStyle??? to style the label instead.');
  }

  var badgeRef = React.useRef(null);

  var _useState = React.useState(false),
      _useState2 = slicedToArray._slicedToArray(_useState, 2),
      opened = _useState2[0],
      setOpened = _useState2[1];

  var handleClose = React.useCallback(function () {
    return setOpened(false);
  }, []);
  var handleOpen = React.useCallback(function () {
    return setOpened(true);
  }, []);
  var address = web3.isAddress(entity) ? entity : null;
  var displayLabel = label || (address && shorten ? web3.shortenAddress(address) : entity);
  return /*#__PURE__*/React__default.createElement(BadgeBase.default, _extends$1._extends({
    badgeRef: badgeRef,
    compact: compact,
    disabled: badgeOnly,
    icon: address && /*#__PURE__*/React__default.createElement(_StyledDiv, {
      _css: 1 * constants.GU,
      _css2: compact ? "\n                  position: relative;\n                  top: -1px;\n                " : ''
    }, /*#__PURE__*/React__default.createElement(EthIdenticon.default, {
      scale: compact ? 0.75 : 1,
      radius: compact ? 2 : 0,
      address: address
    })),
    label: displayLabel,
    labelStyle: "\n        ".concat(!label && address ? textStyles.textStyle('address1') : '', "\n        ").concat(labelStyle, "\n      "),
    onClick: address ? handleOpen : undefined,
    title: address
  }, props), function (popoverDisabled) {
    return !popoverDisabled && address && /*#__PURE__*/React__default.createElement(IdentityBadgePopover.default, {
      address: address,
      connectedAccount: connectedAccount,
      networkType: networkType,
      onClose: handleClose,
      opener: badgeRef.current,
      popoverAction: popoverAction,
      title: popoverTitle,
      visible: opened
    });
  });
});
IdentityBadge.propTypes = {
  badgeOnly: index.PropTypes.bool,
  compact: index.PropTypes.bool,
  connectedAccount: index.PropTypes.bool,
  entity: index.PropTypes.string,
  label: index.PropTypes.string,
  labelStyle: index.PropTypes.string,
  networkType: index.PropTypes.string,
  popoverAction: BadgePopoverActionType.default,
  popoverTitle: index.PropTypes.node,
  shorten: index.PropTypes.bool,
  // Deprecated
  customLabel: index.PropTypes.string,
  fontSize: index.PropTypes.string
};
IdentityBadge.defaultProps = {
  entity: '',
  networkType: 'main',
  shorten: true
};

exports.default = IdentityBadge;
//# sourceMappingURL=IdentityBadge.js.map
