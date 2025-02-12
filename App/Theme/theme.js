import {StyleSheet} from 'react-native';

import CONSTANTS from './constants';
import BASE from './base';

export default StyleSheet.create({
  container: {
    ...BASE.flexOne,
    ...BASE.backgroundColorSmokeWhite,
  },
  flexOne: {
    ...BASE.flexOne,
  },
  flexTwo: {
    ...BASE.flexTwo,
  },
  flex10: {
    ...BASE.flex10,
  },
  flex20: {
    ...BASE.flex20,
  },
  flex30: {
    ...BASE.flex30,
  },
  flex40: {
    ...BASE.flex40,
  },
  flex50: {
    ...BASE.flex50,
  },
  flex60: {
    ...BASE.flex60,
  },
  flex70: {
    ...BASE.flex70,
  },
  flex80: {
    ...BASE.flex80,
  },
  flex90: {
    ...BASE.flex90,
  },
  flexGrowOne: {
    ...BASE.flexGrowOne,
  },
  flexShrink: {
    ...BASE.flexShrink,
  },
  row: {
    ...BASE.row,
  },
  column: {
    ...BASE.column,
  },
  flexWrap: {
    ...BASE.flexWrap,
  },

  positionAbsoluteBottom: {
    ...BASE.positionAbsoluteBottom,
  },

  fullWidth: {
    ...BASE.fullWidth,
  },
  halfWidth: {
    ...BASE.halfWidth,
  },
  fullWidth48: {
    ...BASE.fullWidth48,
  },
  fullWidth77: {
    ...BASE.fullWidth77,
  },
  fullWidth80: {
    ...BASE.fullWidth80,
  },
  fullWidth85: {
    ...BASE.fullWidth85,
  },
  fullWidth90: {
    ...BASE.fullWidth90,
  },
  fullHeight: {
    ...BASE.fullHeight,
  },

  spaceBetween: {
    ...BASE.spaceBetween,
  },
  width: {
    ...BASE.width,
  },
  justifyCenter: {
    ...BASE.justifyCenter,
  },
  spaceAround: {
    ...BASE.spaceAround,
  },
  alignItemsCenter: {
    ...BASE.alignItemsCenter,
  },
  alignItemsFlexStart: {
    ...BASE.alignItemsFlexStart,
  },
  alignItemsFlexEnd: {
    ...BASE.alignItemsFlexEnd,
  },
  alignContentStart: {
    ...BASE.alignContentStart,
  },
  alignContentCenter: {
    ...BASE.alignContentCenter,
  },
  textAlignCenter: {
    ...BASE.textAlignCenter,
  },
  textAlignFlexEnd: {
    ...BASE.textAlignFlexEnd,
  },
  textAlignRight: {
    ...BASE.textAlignRight,
  },
  textAlignLeft: {
    ...BASE.textAlignLeft,
  },
  textAlignVerticalTop: {
    ...BASE.textAlignVerticalTop,
  },

  alignSelfCenter: {
    ...BASE.alignSelfCenter,
  },
  alignSelfFlexStart: {
    ...BASE.alignSelfFlexStart,
  },
  alignSelfFlexEnd: {
    ...BASE.alignSelfFlexEnd,
  },
  justifyFlexEnd: {
    ...BASE.justifyFlexEnd,
  },
  justifyFlexStart: {
    ...BASE.justifyFlexStart,
  },
  center: {
    ...BASE.center,
  },
  overFlow: {
    ...BASE.overFlow,
  },
  overFlowVisible: {
    ...BASE.overFlowVisible,
  },
  activeZindex: {
    ...BASE.activeZindex,
  },
  zeroZindex: {
    ...BASE.zeroZindex,
  },
  zeroZindex1: {
    ...BASE.zeroZindex1,
  },
  underLine: {
    ...BASE.underLine,
  },
  textUppercase: {
    ...BASE.textUppercase,
  },
  borderDash: {
    ...BASE.borderDash,
  },
  dottedBorder: {
    ...BASE.dottedBorder,
  },

  transForm180: {
    transform: [{rotate: '180deg'}],
  },
  transForm90: {
    transform: [{rotate: '90deg'}],
  },
  transForm270: {
    transform: [{rotate: '270deg'}],
  },
  transForm45: {
    transform: [{rotate: '45deg'}],
  },

  // position
  position: {
    ...BASE.position,
  },


  // background Color
  backgroundColorTransparent: {
    ...BASE.backgroundColorTransparent,
  },
  backgroundColorBlack: {
    ...BASE.backgroundColorBlack,
  },
  backgroundColorDarkGrey: {
    ...BASE.backgroundColorDarkGrey,
  },
  backgroundColorCloudyGrey: {
    ...BASE.backgroundColorCloudyGrey,
  },
  backgroundColorSmokeyGrey: {
    ...BASE.backgroundColorSmokeyGrey,
  },
  backgroundColorGraniteGrey: {
    ...BASE.backgroundColorGraniteGrey,
  },
  backgroundColorLightGrey: {
    ...BASE.backgroundColorLightGrey,
  },
  backgroundColorSilver: {
    ...BASE.backgroundColorSilver,
  },
  backgroundColorPlatiniumWhite: {
    ...BASE.backgroundColorPlatiniumWhite,
  },
  backgroundColorWhite: {
    ...BASE.backgroundColorWhite,
  },
  backgroundColorVistaWhite: {
    ...BASE.backgroundColorVistaWhite,
  },
  backgroundColorGhostWhite: {
    ...BASE.backgroundColorGhostWhite,
  },
  backgroundColorSmokeWhite: {
    ...BASE.backgroundColorSmokeWhite,
  },
  backgroundColorGoldenYellow: {
    ...BASE.backgroundColorGoldenYellow,
  },
  backgroundColorDarkOrange: {
    ...BASE.backgroundColorDarkOrange,
  },
  backgroundColorCoralRed: {
    ...BASE.backgroundColorCoralRed,
  },
  backgroundColorMidGreen: {
    ...BASE.backgroundColorMidGreen,
  },
  backgroundColorDodgerBlue: {
    ...BASE.backgroundColorDodgerBlue,
  },

  // font weights
  fontWeight500: {
    ...BASE.fontWeight500,
  },

  // font size
  fontSize8: {
    ...BASE.fontSize8,
  },
  fontSize9: {
    ...BASE.fontSize9,
  },
  fontSize10: {
    ...BASE.fontSize10,
  },
  fontSize11: {
    ...BASE.fontSize11,
  },
  fontSize12: {
    ...BASE.fontSize12,
  },
  fontSize13: {
    ...BASE.fontSize13,
  },
  fontSize14: {
    ...BASE.fontSize14,
  },
  fontSize16: {
    ...BASE.fontSize16,
  },
  fontSize18: {
    ...BASE.fontSize18,
  },
  fontSize20: {
    ...BASE.fontSize20,
  },
  fontSize22: {
    ...BASE.fontSize22,
  },
  fontSize24: {
    ...BASE.fontSize24,
  },
  fontSize32: {
    ...BASE.fontSize32,
  },



  opacityDisable:{
    ...BASE.opacityDisable
  },

  // line height
  lineHeight12: {
    ...BASE.lineHeight12,
  },
  lineHeight14: {
    ...BASE.lineHeight14,
  },
  lineHeight15: {
    ...BASE.lineHeight15,
  },
  lineHeight16: {
    ...BASE.lineHeight16,
  },
  lineHeight17: {
    ...BASE.lineHeight17,
  },
  lineHeight18: {
    ...BASE.lineHeight18,
  },
  lineHeight19: {
    ...BASE.lineHeight19,
  },
  lineHeight20: {
    ...BASE.lineHeight20,
  },
  lineHeight21: {
    ...BASE.lineHeight21,
  },
  lineHeight22: {
    ...BASE.lineHeight22,
  },
  lineHeight24: {
    ...BASE.lineHeight24,
  },
  lineHeight26: {
    ...BASE.lineHeight26,
  },
  lineHeight29: {
    ...BASE.lineHeight29,
  },
  lineHeight32: {
    ...BASE.lineHeight32,
  },
  lineHeight48: {
    ...BASE.lineHeight48,
  },


  // border width
  borderWidth4: {
    ...BASE.borderWidth4,
  },
  borderWidth3: {
    ...BASE.borderWidth3,
  },
  borderWidth2: {
    ...BASE.borderWidth2,
  },
  borderWidth1: {
    ...BASE.borderWidth1,
  },
  borderWidth0: {
    ...BASE.borderWidth0,
  },

  // border bottom width
  borderBottomWidth1: {
    ...BASE.borderBottomWidth1,
  },
  borderBottomWidth2: {
    ...BASE.borderBottomWidth2,
  },
  borderRightWidth1: {
    ...BASE.borderRightWidth1,
  },
  borderTopWidth1: {
    ...BASE.borderTopWidth1,
  },
  borderTopWidth2: {
    ...BASE.borderTopWidth2,
  },
  borderTopWidth3: {
    ...BASE.borderTopWidth3,
  },
  
  // border left width
  borderLeftWidth1: {
    ...BASE.borderLeftWidth1,
  },
  borderLeftWidth2: {
    ...BASE.borderLeftWidth2,
  },

  // border Color
  borderColorTransparent: {
    ...BASE.borderColorTransparent,
  },
  borderColorBlack:{
    ...BASE.borderColorBlack
  },
  borderColorLightGrey: {
    ...BASE.borderColorLightGrey,
  },
  borderColorWhite:{
    ...BASE.borderColorWhite
  },
  borderColorGhostWhite:{
    ...BASE.borderColorGhostWhite
  },

  borderBottomColorPlatiniumWhite: {
    ...BASE.borderBottomColorPlatiniumWhite,
  },
 

  // letter spacing
  letterSpacingNormal: {
    ...BASE.letterSpacingNormal,
  },
  letterSpacing: {
    ...BASE.letterSpacing,
  },
  letterSpacingHalf: {
    ...BASE.letterSpacingHalf,
  },

  // color
  colorBlack: {
    ...BASE.colorBlack,
  },
  colorDarkGrey: {
    ...BASE.colorDarkGrey,
  },
  colorCloudyGrey: {
    ...BASE.colorCloudyGrey,
  },
  colorSmokeyGrey: {
    ...BASE.colorSmokeyGrey,
  },
  colorGraniteGrey: {
    ...BASE.colorGraniteGrey,
  },
  colorLightGrey: {
    ...BASE.colorLightGrey,
  },
  colorSilver: {
    ...BASE.colorSilver,
  },
  colorPlatiniumWhite: {
    ...BASE.colorPlatiniumWhite,
  },
  colorWhite: {
    ...BASE.colorWhite,
  },
  colorVistaWhite:{
    ...BASE.colorVistaWhite
  },
  colorGhostWhite:{
    ...BASE.colorGhostWhite
  },
  colorSmokeWhite:{
    ...BASE.colorSmokeWhite
  },
  colorGoldenYellow:{
    ...BASE.colorGoldenYellow
  },
  colorDarkOrange:{
    ...BASE.colorDarkOrange
  },
  colorCoralRed:{
    ...BASE.colorCoralRed
  },
  colorMidGreen:{
    ...BASE.colorMidGreen
  },
  colorDodgerBlue:{
    ...BASE.colorDodgerBlue
  },


  //complete margin
  margin16:{
		...BASE.margin16
	},
  marginBottomMinus2:{
		...BASE.marginBottomMinus2
	},
  marginBottomMinus4:{
		...BASE.marginBottomMinus4
	},
  marginBottomMinus6:{
		...BASE.marginBottomMinus6
	},
  marginBottomMinus8:{
		...BASE.marginBottomMinus8
	},
  marginBottomMinus10:{
		...BASE.marginBottomMinus10
	},

  marginTopMinusHalf:{
		...BASE.marginTopMinusHalf
	},
  marginTopMinus2:{
		...BASE.marginTopMinus2
	},
  marginTopMinus4:{
		...BASE.marginTopMinus4
	},
  marginTopMinus6:{
		...BASE.marginTopMinus6
	},
  marginTopMinus8:{
		...BASE.marginTopMinus8
	},
  marginTopMinus10:{
		...BASE.marginTopMinus10
	},
	marginTopMinus12:{
		...BASE.marginTopMinus12
	},
  marginTopMinus14:{
		...BASE.marginTopMinus14
	},
  marginTopMinus20:{
		...BASE.marginTopMinus20
	},
  marginTopMinus24:{
		...BASE.marginTopMinus24
	},
  marginTopMinus28:{
		...BASE.marginTopMinus28
	},
  marginTopMinus36:{
		...BASE.marginTopMinus36
	},
	marginTopMinus56:{
		...BASE.marginTopMinus56
	},
  marginTopMinus89:{
		...BASE.marginTopMinus89
	},
  marginTopMinus96:{
		...BASE.marginTopMinus96
	},
  marginTopMinus120:{
		...BASE.marginTopMinus120
	},
  marginTopMinus150:{
    ...BASE.marginTopMinus150
  },
  marginTopMinus175:{
    ...BASE.marginTopMinus175
  },
  marginTop2: {
    ...BASE.marginTop2,
  },
  marginTop3: {
    ...BASE.marginTop3,
  },
  marginTop4: {
    ...BASE.marginTop4,
  },
  marginTop5: {
    ...BASE.marginTop5,
  },
  marginTop6: {
    ...BASE.marginTop6,
  },
  marginTop7: {
    ...BASE.marginTop7,
  },
  marginTop8: {
    ...BASE.marginTop8,
  },
  paddingTop6: {
    ...BASE.paddingTop6,
  },
  paddingTop8: {
    ...BASE.paddingTop8,
  },
  paddingTop9: {
    ...BASE.paddingTop9,
  },
  paddingTop69: {
    ...BASE.paddingTop69,
  },
  marginTop10: {
    ...BASE.marginTop10,
  },
  marginTop11: {
    ...BASE.marginTop11,
  },
  marginTop12: {
    ...BASE.marginTop12,
  },
  marginTop14: {
    ...BASE.marginTop14,
  },
  marginTop16: {
    ...BASE.marginTop16,
  },
  marginTop18: {
    ...BASE.marginTop18,
  },
  marginTop20: {
    ...BASE.marginTop20,
  },
  marginTop22: {
    ...BASE.marginTop22,
  },
  marginTop24: {
    ...BASE.marginTop24,
  },
  marginTop27: {
    ...BASE.marginTop27,
  },
  marginTop28: {
    ...BASE.marginTop28,
  },
  marginTop30: {
    ...BASE.marginTop30,
  },
  marginTop32: {
    ...BASE.marginTop32,
  },
  marginTop39: {
    ...BASE.marginTop39,
  },
  marginTop40: {
    ...BASE.marginTop40,
  },
  marginTop42: {
    ...BASE.marginTop42,
  },
  marginTop46: {
    ...BASE.marginTop46
  },
  marginTop48: {
    ...BASE.marginTop48,
  },
  marginTop56: {
    ...BASE.marginTop56,
  },
  marginTop64: {
    ...BASE.marginTop64,
  },
  marginTop70: {
    ...BASE.marginTop70,
  },
  marginTop71: {
    ...BASE.marginTop71,
  },
  marginTop104: {
    ...BASE.marginTop104,
  },
  marginTop136: {
    ...BASE.marginTop136,
  },
  

  paddingBottom4: {
    ...BASE.paddingBottom4,
  },
  paddingBottom20: {
    ...BASE.paddingBottom20,
  },
  paddingBottom24: {
    ...BASE.paddingBottom24,
  },
  paddingBottom80: {
    ...BASE.paddingBottom80,
  },
  paddingBottom96: {
    ...BASE.paddingBottom96,
  },

  // marginBottom
  marginBottom4: {
    ...BASE.marginBottom4,
  },
  marginBottom6: {
    ...BASE.marginBottom6,
  },
  marginBottom8: {
    ...BASE.marginBottom8,
  },
  marginBottom10: {
    ...BASE.marginBottom10,
  },
  marginBottom12: {
    ...BASE.marginBottom12,
  },
  marginBottom14: {
    ...BASE.marginBottom14,
  },
  marginBottom16: {
    ...BASE.marginBottom16,
  },
  marginBottom18: {
    ...BASE.marginBottom18,
  },
  marginBottom20: {
    ...BASE.marginBottom20,
  },
  marginBottom24: {
    ...BASE.marginBottom24,
  },
  marginBottom26: {
    ...BASE.marginBottom26,
  },
  marginBottom28: {
    ...BASE.marginBottom28,
  },
  marginBottom30: {
    ...BASE.marginBottom30,
  },
  marginBottom32: {
    ...BASE.marginBottom32,
  },
  marginBottom34: {
    ...BASE.marginBottom34,
  },
  marginBottom40: {
    ...BASE.marginBottom40,
  },
  marginBottom56: {
    ...BASE.marginBottom56,
  },
  marginBottom96: {
    ...BASE.marginBottom96,
  },
  marginBottom120: {
    ...BASE.marginBottom120,
  },
  marginBottom147: {
    ...BASE.marginBottom147,
  },

  // margin left
  marginLeft2: {
    ...BASE.marginLeft2,
  },
  marginLeft4: {
    ...BASE.marginLeft4,
  },
  marginLeft5: {
    ...BASE.marginLeft5,
  },
  marginLeft6: {
    ...BASE.marginLeft6,
  },
  marginLeft8: {
    ...BASE.marginLeft8,
  },
  marginLeft10: {
    ...BASE.marginLeft10,
  },
  marginLeft11: {
    ...BASE.marginLeft11,
  },
  marginLeft12: {
    ...BASE.marginLeft12,
  },
  marginLeft14: {
    ...BASE.marginLeft14,
  },
  marginLeft16: {
    ...BASE.marginLeft16,
  },
  marginLeft20: {
    ...BASE.marginLeft20,
  },
  marginLeft22: {
    ...BASE.marginLeft22,
  },
  marginLeft24: {
    ...BASE.marginLeft24,
  },
  marginLeft26: {
    ...BASE.marginLeft26,
  },
  marginLeft27: {
    ...BASE.marginLeft27,
  },
  marginLeft40: {
    ...BASE.marginLeft40,
  },

  // margin right
  marginLeftMinus1:{
		...BASE.marginLeftMinus1
	},
  marginLeftMinus2:{
		...BASE.marginLeftMinus2
	},
  marginLeftMinus4:{
		...BASE.marginLeftMinus4
	},
  marginLeftMinus8:{
		...BASE.marginLeftMinus8
	},
  marginLeftMinus10:{
		...BASE.marginLeftMinus10
	},
  marginLeftMinus12:{
		...BASE.marginLeftMinus12
	},
  marginLeftMinus14:{
		...BASE.marginLeftMinus14
	},
  marginLeftMinus16:{
		...BASE.marginLeftMinus16
	},
  marginLeftMinus18:{
		...BASE.marginLeftMinus18
	},
  marginLeftMinus20:{
		...BASE.marginLeftMinus20
	},
  marginLeftMinus22:{
		...BASE.marginLeftMinus22
	},
  marginLeftMinus24:{
		...BASE.marginLeftMinus24
	},
  marginLeftMinus26:{
		...BASE.marginLeftMinus26
	},
  marginLeftMinus28:{
		...BASE.marginLeftMinus28
	},
  marginLeftMinus30:{
		...BASE.marginLeftMinus30
	},
  marginRight2: {
    ...BASE.marginRight2,
  },
  marginRight4: {
    ...BASE.marginRight4,
  },
  marginRight5: {
    ...BASE.marginRight5,
  },
  marginRight6: {
    ...BASE.marginRight6,
  },
  marginRight8: {
    ...BASE.marginRight8,
  },
  marginRight10: {
    ...BASE.marginRight10,
  },
  marginRight12: {
    ...BASE.marginRight12,
  },
  marginRight14: {
    ...BASE.marginRight14,
  },
  marginRight16: {
    ...BASE.marginRight16,
  },
  marginRight20: {
    ...BASE.marginRight20,
  },
  marginRight24: {
    ...BASE.marginRight24,
  },
  marginRight34: {
    ...BASE.marginRight34,
  },

  // padding right
  paddingRight20: {
    ...BASE.paddingRight20,
  },
  paddingRight40: {
    ...BASE.paddingRight40,
  },
  paddingRight60: {
    ...BASE.paddingRight60,
  },
  paddingRight144: {
    ...BASE.paddingRight144,
  },


  // padding bottom
  paddingBottom4: {
    ...BASE.paddingBottom4,
  },
  paddingBottom8: {
    ...BASE.paddingBottom8,
  },
  paddingBottom12: {
    ...BASE.paddingBottom12,
  },
  paddingBottom16: {
    ...BASE.paddingBottom16,
  },
  paddingBottom18: {
    ...BASE.paddingBottom18,
  },
  paddingBottom32: {
    ...BASE.paddingBottom32,
  },
  paddingBottom48: {
    ...BASE.paddingBottom48,
  },
  paddingBottom56: {
    ...BASE.paddingBottom56,
  },
  paddingBottom62: {
    ...BASE.paddingBottom62,
  },
  paddingBottom64: {
    ...BASE.paddingBottom64,
  },
  paddingBottom72: {
    ...BASE.paddingBottom72,
  },
  paddingBottom100: {
    ...BASE.paddingBottom100,
  },
  paddingBottom124: {
    ...BASE.paddingBottom124,
  },
  paddingBottom147: {
    ...BASE.paddingBottom147,
  },
  paddingBottom153: {
    ...BASE.paddingBottom153,
  },
  paddingBottom230: {
    ...BASE.paddingBottom230,
  },

  // padding top
  paddingTop2: {
    ...BASE.paddingTop2,
  },
  paddingTop4: {
    ...BASE.paddingTop4,
  },
  paddingTop10: {
    ...BASE.paddingTop10,
  },
  paddingTop12: {
    ...BASE.paddingTop12,
  },
  paddingTop13: {
    ...BASE.paddingTop13,
  },
  paddingTop14: {
    ...BASE.paddingTop14,
  },
  paddingTop16: {
    ...BASE.paddingTop16,
  },
  paddingTop18: {
    ...BASE.paddingTop18,
  },
  paddingTop20: {
    ...BASE.paddingTop20,
  },
  paddingTop24: {
    ...BASE.paddingTop24,
  },
  paddingTop35: {
    ...BASE.paddingTop35,
  },
  paddingTop56: {
    ...BASE.paddingTop56,
  },
  paddingTop100: {
    ...BASE.paddingTop100,
  },
  paddingTop156: {
    ...BASE.paddingTop156,
  },

  // padding left
  paddingLeft2: {
    ...BASE.paddingLeft2,
  },
  paddingLeft7: {
    ...BASE.paddingLeft7,
  },
  paddingLeft8: {
    ...BASE.paddingLeft8,
  },
  paddingLeft10: {
    ...BASE.paddingLeft10,
  },
  paddingLeft19: {
    ...BASE.paddingLeft19,
  },
  paddingLeft31: {
    ...BASE.paddingLeft31,
  },

  // height width
  heightWidth4: {
    ...BASE.heightWidth4,
  },
  heightWidth5: {
    ...BASE.heightWidth5,
  },
  heightWidth6: {
    ...BASE.heightWidth6,
  },
  heightWidth8: {
    ...BASE.heightWidth8,
  },
  heightWidth10: {
    ...BASE.heightWidth10,
  },
  heightWidth12: {
    ...BASE.heightWidth12,
  },
  heightWidth14: {
    ...BASE.heightWidth14,
  },
  heightWidth15: {
    ...BASE.heightWidth15,
  },
  heightWidth16: {
    ...BASE.heightWidth16,
  },
  heightWidth18: {
    ...BASE.heightWidth18,
  },
  heightWidth20: {
    ...BASE.heightWidth20,
  },
  heightWidth22: {
    ...BASE.heightWidth22,
  },
  heightWidth24: {
    ...BASE.heightWidth24,
  },
  heightWidth26: {
    ...BASE.heightWidth26,
  },
  heightWidth28: {
    ...BASE.heightWidth28,
  },
  heightWidth30: {
    ...BASE.heightWidth30,
  },
  heightWidth32: {
    ...BASE.heightWidth32,
  },
  heightWidth36: {
    ...BASE.heightWidth36,
  },
  heightWidth40: {
    ...BASE.heightWidth40,
  },
  heightWidth42: {
    ...BASE.heightWidth42,
  },
  heightWidth48: {
    ...BASE.heightWidth48,
  },
  heightWidth56: {
    ...BASE.heightWidth56,
  },
  heightWidth60: {
    ...BASE.heightWidth60,
  },
  heightWidth64: {
    ...BASE.heightWidth64,
  },
  heightWidth67: {
    ...BASE.heightWidth67,
  },
  heightWidth72: {
    ...BASE.heightWidth72,
  },
  heightWidth85: {
    ...BASE.heightWidth85,
  },
  heightWidth88: {
    ...BASE.heightWidth88,
  },
  heightWidth98: {
    ...BASE.heightWidth98,
  },
  heightWidth100: {
    ...BASE.heightWidth100,
  },
  heightWidth102: {
    ...BASE.heightWidth102,
  },
  heightWidth104: {
    ...BASE.heightWidth104,
  },
  heightWidth116: {
    ...BASE.heightWidth116,
  },
  heightWidth124: {
    ...BASE.heightWidth124,
  },
  heightWidth141: {
    ...BASE.heightWidth141,
  },
  heightWidth180: {
    ...BASE.heightWidth180,
  },
  heightWidth218: {
    ...BASE.heightWidth218,
  },
  heightWidth240: {
    ...BASE.heightWidth240,
  },
  heightWidth260: {
    ...BASE.heightWidth260,
  },
  heightWidth290: {
    ...BASE.heightWidth290,
  },

  // width
  width1: {
    ...BASE.width1,
  },
  width2: {
    ...BASE.width2,
  },
  width6: {
    ...BASE.width6,
  },
  width8: {
    ...BASE.width8,
  },
  width10: {
    ...BASE.width10,
  },
  width12: {
    ...BASE.width12,
  },
  width16: {
    ...BASE.width16,
  },
  width20: {
    ...BASE.width20,
  },
  width24: {
    ...BASE.width24,
  },
  width70: {
    ...BASE.width70,
  },
  Width74: {
    ...BASE.Width74,
  },
  Width75: {
    ...BASE.Width75,
  },
  width93: {
    ...BASE.Width93,
  },
  Width112: {
    ...BASE.Width112,
  },
  Width113: {
    ...BASE.Width113,
  },
  Width114: {
    ...BASE.Width114,
  },
  width115: {
    ...BASE.width115,
  },
  width120: {
    ...BASE.width120,
  },
  Width153: {
    ...BASE.Width153,
  },
  width155: {
    ...BASE.Width155,
  },
  width175: {
    ...BASE.Width175,
  },
  width176: {
    ...BASE.Width176,
  },
  Width180: {
    ...BASE.Width180,
  },
  width183: {
    ...BASE.width183,
  },
  Width191: {
    ...BASE.Width191,
  },
  Width28: {
    ...BASE.Width28,
  },
  Width32: {
    ...BASE.Width32,
  },
  Width35: {
    ...BASE.Width35,
  },
  width37: {
    ...BASE.Width37,
  },
  Width40: {
    ...BASE.Width40,
  },
  Width44: {
    ...BASE.Width44,
  },
  Width46: {
    ...BASE.Width46,
  },
  Width48: {
    ...BASE.Width48,
  },
  Width52: {
    ...BASE.Width52,
  },
  Width54: {
    ...BASE.Width54,
  },
  Width59: {
    ...BASE.Width59,
  },
  Width62: {
    ...BASE.Width62,
  },
  Width65: {
    ...BASE.Width65,
  },
  Width68: {
    ...BASE.Width68,
  },
  Width72: {
    ...BASE.Width72,
  },
  Width78: {
    ...BASE.Width78,
  },
  Width82: {
    ...BASE.Width82,
  },
  Width84: {
    ...BASE.Width84,
  },
  Width89: {
    ...BASE.Width89,
  },
  Width90: {
    ...BASE.Width90,
  },
  Width91: {
    ...BASE.Width91,
  },
  Width93: {
    ...BASE.Width93,
  },
  width94: {
    ...BASE.width94,
  },
  width95:{
    ...BASE.width95
  },
  width98: {
    ...BASE.Width98,
  },
  width99: {
    ...BASE.Width99,
  },
  width100: {
    ...BASE.Width100,
  },
  width102: {
    ...BASE.Width102,
  },
  width104: {
    ...BASE.Width104,
  },
  width110: {
    ...BASE.Width110,
  },
  width118: {
    ...BASE.Width118,
  },
  Width142: {
    ...BASE.Width142,
  },
  Width130: {
    ...BASE.Width130,
  },
  Width133: {
    ...BASE.Width133,
  },
  Width134: {
    ...BASE.Width134,
  },
  Width138: {
    ...BASE.Width138,
  },
  Width148: {
    ...BASE.Width148,
  },
  width156: {
    ...BASE.Width156,
  },
  Width162: {
    ...BASE.Width162,
  },
  Width172: {
    ...BASE.Width172,
  },
  Width180: {
    ...BASE.Width180,
  },
  Width182: {
    ...BASE.Width182,
  },
  width188: {
    ...BASE.width188,
  },
  Width194: {
    ...BASE.width194,
  },
  Width196: {
    ...BASE.width196,
  },
  width200: {
    ...BASE.width200,
  },
  width210: {
    ...BASE.width210,
  },
  width218: {
    ...BASE.width218,
  },
  width225: {
    ...BASE.width225,
  },
  Width230: {
    ...BASE.Width230,
  },
  Width238: {
    ...BASE.Width238,
  },
  Width240: {
    ...BASE.Width240,
  },
  width243: {
    ...BASE.Width243,
  },
  Width246: {
    ...BASE.Width246,
  },
  Width250: {
    ...BASE.width250,
  },
  width258: {
    ...BASE.width258,
  },
  width267: {
    ...BASE.width267,
  },
  width278:{
    ...BASE.width278
  },
  width280: {
    ...BASE.width280,
  },
  width286:{
    ...BASE.width286
  },
   width288:{
    ...BASE.width288
  },
  width290: {
    ...BASE.width290,
  },
  width291: {
    ...BASE.width291,
  },
  width296: {
    ...BASE.width296,
  },
  width306: {
    ...BASE.Width306,
  },
  width316: {
    ...BASE.Width316,
  },
  width318: {
    ...BASE.Width318,
  },
  Width326: {
    ...BASE.Width326,
  },
  width328: {
    ...BASE.Width328,
  },
  width336: {
    ...BASE.width336,
  },
  width338: {
    ...BASE.width338,
  },
  width340: {
    ...BASE.width340,
  },
  width342: {
    ...BASE.width342,
  },
  width348: {
    ...BASE.width348,
  },
  width358: {
    ...BASE.width358,
  },
  width366: {
    ...BASE.width366,
  },
  width370: {
    ...BASE.width370,
  },
  width374: {
    ...BASE.width374,
  },

  // height
  height1: {
    ...BASE.height1,
  },
  height2: {
    ...BASE.height2,
  },
  height4: {
    ...BASE.height4,
  },
  height8: {
    ...BASE.height8,
  },
  height10: {
    ...BASE.height10,
  },
  height11: {
    ...BASE.height11,
  },
  height12: {
    ...BASE.height12,
  },
  height13: {
    ...BASE.height13,
  },
  height14: {
    ...BASE.height14,
  },
  height15: {
    ...BASE.height15,
  },
  height17: {
    ...BASE.height17,
  },
  height18: {
    ...BASE.height18,
  },
  height20: {
    ...BASE.height20,
  },
  height22: {
    ...BASE.height22,
  },
  height24: {
    ...BASE.height24,
  },
  height25: {
    ...BASE.height25,
  },
  height28: {
    ...BASE.height28,
  },
  height29: {
    ...BASE.height29,
  },
  height30: {
    ...BASE.height30,
  },
  height32: {
    ...BASE.height32,
  },
  height34: {
    ...BASE.height34,
  },
  height36: {
    ...BASE.height36,
  },
  height37: {
    ...BASE.height37,
  },
  height38: {
    ...BASE.height38,
  },
  height40: {
    ...BASE.height40,
  },
  height42: {
    ...BASE.height42,
  },
  height43: {
    ...BASE.height43,
  },
  height44: {
    ...BASE.height44,
  },
  height46: {
    ...BASE.height46,
  },
  height47: {
    ...BASE.height47,
  },
  height48: {
    ...BASE.height48,
  },
  height49: {
    ...BASE.height49,
  },
  height52: {
    ...BASE.height52,
  },
  height53: {
    ...BASE.height53,
  },
  height56: {
    ...BASE.height56,
  },
  height60: {
    ...BASE.height60,
  },
  height64:{
    ...BASE.height64
  },
  height67:{
    ...BASE.height67
  },
  height70: {
    ...BASE.height70,
  },
  height72: {
    ...BASE.height72,
  },
  height80: {
    ...BASE.height80,
  },
  height84: {
    ...BASE.height84,
  },
  height95: {
    ...BASE.height95,
  },
  height98: {
    ...BASE.height98,
  },
  height100: {
    ...BASE.height100,
  },
  height105: {
    ...BASE.height105,
  },
  height107: {
    ...BASE.height107,
  },
  height110: {
    ...BASE.height110,
  },
  height112: {
    ...BASE.height112,
  },
  height117: {
    ...BASE.height117,
  },
  height120: {
    ...BASE.height120,
  },
  height123: {
    ...BASE.height123,
  },
  height128: {
    ...BASE.height128,
  },
  height130: {
    ...BASE.height130,
  },
  height139: {
    ...BASE.height139,
  },
  height140: {
    ...BASE.height140,
  },
  height162: {
    ...BASE.height162,
  },
  height164: {
    ...BASE.height164,
  },
  height169: {
    ...BASE.height169,
  },
  height141: {
    ...BASE.height141,
  },
  height146: {
    ...BASE.height146,
  },
  height148: {
    ...BASE.height148,
  },
  height150: {
    ...BASE.height150,
  },
  height152: {
    ...BASE.height152,
  },
  height153: {
    ...BASE.height153,
  },
  height156: {
    ...BASE.height156,
  },
  height172: {
    ...BASE.height172,
  },
  height178: {
    ...BASE.height178,
  },
  heigh180: {
    ...BASE.height180,
  },
  height186: {
    ...BASE.height186,
  },
  height194: {
    ...BASE.height194,
  },
  height196: {
    ...BASE.height196,
  },
  height200: {
    ...BASE.height200,
  },
  height208: {
    ...BASE.height208,
  },
  height211: {
    ...BASE.height211,
  },
  height219: {
    ...BASE.height219,
  },
  height226: {
    ...BASE.height226,
  },
  height230: {
    ...BASE.height230,
  },
  height231: {
    ...BASE.height231,
  },
  height238: {
    ...BASE.height238,
  },
  height240: {
    ...BASE.height240,
  },
  height245: {
    ...BASE.height245,
  },
  height250: {
    ...BASE.height250,
  },
  height260: {
    ...BASE.height260,
  },
  height278: {
    ...BASE.height278,
  },
  height290: {
    ...BASE.height290,
  },
  height282: {
    ...BASE.height282,
  },
  height288: {
    ...BASE.height288,
  },
  height320: {
    ...BASE.height320,
  },
  height322: {
    ...BASE.height322,
  },
  height336: {
    ...BASE.height336,
  },
  height341: {
    ...BASE.height341,
  },
  height346: {
    ...BASE.height346,
  },
  height349: {
    ...BASE.height349,
  },
  height352: {
    ...BASE.height352,
  },
  height360: {
    ...BASE.height360,
  },
  height370: {
    ...BASE.height370,
  },
  height405: {
    ...BASE.height405,
  },
  height410: {
    ...BASE.height410,
  },
  height420: {
    ...BASE.height420,
  },
  height428: {
    ...BASE.height428,
  },
  height445: {
    ...BASE.height445,
  },
  height465: {
    ...BASE.height465,
  },
  height495: {
    ...BASE.height495,
  },
  height512: {
    ...BASE.height512,
  },

  // opacity
  opacity0: {
    ...BASE.opacity0,
  },
  opacity4: {
    ...BASE.opacity4,
  },
  opacity12: {
    ...BASE.opacity12,
  },
  opacity24: {
    ...BASE.opacity24,
  },
  opacity48: {
    ...BASE.opacity48,
  },
  opacity50: {
    ...BASE.opacity50,
  },
  opacity60: {
    ...BASE.opacity60,
  },
  opacity64: {
    ...BASE.opacity64,
  },
  opacity75: {
    ...BASE.opacity75,
  },
  opacity80: {
    ...BASE.opacity80,
  },
  opacity85: {
    ...BASE.opacity85,
  },
  opacity90: {
    ...BASE.opacity90,
  },

  // padding horizontal
  paddingHorizontal4: {
    ...BASE.paddingHorizontal4,
  },
  paddingHorizontal6: {
    ...BASE.paddingHorizontal6,
  },
  paddingVertical5: {
    ...BASE.paddingVertical5,
  },
  paddingHorizontal8: {
    ...BASE.paddingHorizontal8,
  },
  paddingHorizontal9: {
    ...BASE.paddingHorizontal9,
  },
  paddingHorizontal10: {
    ...BASE.paddingHorizontal10,
  },
  paddingHorizontal12: {
    ...BASE.paddingHorizontal12,
  },
  paddingHorizontal14: {
    ...BASE.paddingHorizontal14,
  },
  paddingHorizontal16: {
    ...BASE.paddingHorizontal16,
  },
  paddingHorizontal18: {
    ...BASE.paddingHorizontal18,
  },
  paddingHorizontal20: {
    ...BASE.paddingHorizontal20,
  },
  paddingHorizontal24: {
    ...BASE.paddingHorizontal24,
  },
  paddingHorizontal32: {
    ...BASE.paddingHorizontal32,
  },
  paddingHorizontal38: {
    ...BASE.paddingHorizontal38,
  },
  paddingHorizontal118: {
    ...BASE.paddingHorizontal118,
  },

  // padding left
  paddingLeft4: {
    ...BASE.paddingLeft4,
  },
  paddingLeft8: {
    ...BASE.paddingLeft8,
  },
  paddingLeft12: {
    ...BASE.paddingLeft12,
  },
  paddingLeft14: {
    ...BASE.paddingLeft14,
  },
  paddingLeft16: {
    ...BASE.paddingLeft16,
  },
  paddingLeft22: {
    ...BASE.paddingLeft22,
  },
  paddingLeft24: {
    ...BASE.paddingLeft24,
  },

  // padding right
  paddingRight2: {
    ...BASE.paddingRight2,
  },
  paddingRight4: {
    ...BASE.paddingRight4,
  },
  paddingRight6: {
    ...BASE.paddingRight6,
  },
  paddingRight8: {
    ...BASE.paddingRight8,
  },
  paddingRight10: {
    ...BASE.paddingRight10,
  },
  paddingRight16: {
    ...BASE.paddingRight16,
  },
  paddingRight24: {
    ...BASE.paddingRight24,
  },
  paddingRight28: {
    ...BASE.paddingRight28,
  },

  // padding vertical
  paddingVertical2: {
    ...BASE.paddingVertical2,
  },
  paddingVertical4: {
    ...BASE.paddingVertical4,
  },
  paddingVertical5: {
    ...BASE.paddingVertical5,
  },
  paddingVertical6: {
    ...BASE.paddingVertical6,
  },
  paddingVertical7: {
    ...BASE.paddingVertical7,
  },
  paddingVertical8: {
    ...BASE.paddingVertical8,
  },
  paddingVertical10: {
    ...BASE.paddingVertical10,
  },
  paddingVertical12: {
    ...BASE.paddingVertical12,
  },
  paddingVertical16: {
    ...BASE.paddingVertical16,
  },
  paddingVertical20: {
    ...BASE.paddingVertical20,
  },
  paddingVertical22: {
    ...BASE.paddingVertical22,
  },
  paddingVertical24: {
    ...BASE.paddingVertical24,
  },

  // padding
  padding0: {
    ...BASE.padding0,
  },
  padding1: {
    ...BASE.padding1,
  },
  padding2: {
    ...BASE.padding2,
  },
  padding4: {
    ...BASE.padding4,
  },
  padding8: {
    ...BASE.padding8,
  },
  padding9: {
    ...BASE.padding9,
  },
  padding10: {
    ...BASE.padding10,
  },
  padding12: {
    ...BASE.padding12,
  },
  padding14: {
    ...BASE.padding14,
  },
  padding16: {
    ...BASE.padding16,
  },
  padding24: {
    ...BASE.padding24,
  },

  // paddingBottom
  paddingBottom2: {
    ...BASE.paddingBottom2,
  },

  marginHorizontal4: {
    ...BASE.marginHorizontal4
  },
  marginHorizontal8: {
    ...BASE.marginHorizontal8
  },
  marginHorizontal12: {
    ...BASE.marginHorizontal12
  },
  marginHorizontal16: {
    ...BASE.marginHorizontal16
  },
  marginHorizontal20: {
    ...BASE.marginHorizontal20
  },
  marginHorizontal24: {
    ...BASE.marginHorizontal24
  },

  // border radius
  borderRadius2: {
    ...BASE.borderRadius2,
  },
  borderRadius4: {
    ...BASE.borderRadius4,
  },
  borderRadius5: {
    ...BASE.borderRadius5,
  },
  borderRadius6: {
    ...BASE.borderRadius6,
  },
  borderRadius8: {
    ...BASE.borderRadius8,
  },
  borderRadius10: {
    ...BASE.borderRadius10,
  },
  borderRadius12: {
    ...BASE.borderRadius12,
  },
  borderRadius15: {
    ...BASE.borderRadius15,
  },
  borderRadius16: {
    ...BASE.borderRadius16,
  },
  borderRadius20: {
    borderRadius: CONSTANTS.Width20,
  },
  borderRadius25: {
    borderRadius: CONSTANTS.Width25,
  },
  borderRadius30: {
    ...BASE.borderRadius30,
  },
  borderRadius32: {
    ...BASE.borderRadius32,
  },
  borderRadius100: {
    ...BASE.borderRadius100,
  },
  borderTopLeftRadius10: {
    ...BASE.borderTopLeftRadius10,
  },
  borderTopRightRadius10: {
    ...BASE.borderTopRightRadius10,
  },
  borderTopLeftRadius16: {
    ...BASE.borderTopLeftRadius16,
  },
  borderTopRightRadius16: {
    ...BASE.borderTopRightRadius16,
  },
  borderBottomRightRadius16: {
    ...BASE.borderBottomRightRadius16,
  },
  borderBottomLeftRadius16: {
    ...BASE.borderBottomLeftRadius16,
  },
  borderTopRightRadius8: {
    ...BASE.borderTopRightRadius8,
  },
  borderTopLeftRadius8: {
    ...BASE.borderTopLeftRadius8,
  },
  borderBottomLeftRadius8: {
    ...BASE.borderBottomLeftRadius8,
  },
  borderBottomRightRadius8: {
    ...BASE.borderBottomRightRadius8,
  },

  // maxWidth
  maxWidth65: {
    ...BASE.maxWidth65,
  },
  maxWidth114: {
    ...BASE.maxWidth114,
  },
  width270: {
    ...BASE.width270,
  },
  width268: {
    ...BASE.width268,
  },

  // max height
  maxHeightFull95: {
    ...BASE.maxHeightFull95
  },
  minHeight100: {
    ...BASE.minHeight100
  },

  // right
  right16: {
    ...BASE.right16,
  },

  // bottom
  bottom3: {
    ...BASE.bottom3,
  },
  bottom4: {
    ...BASE.bottom4,
  },
  bottom5: {
    ...BASE.bottom5,
  },
  bottom7: {
    ...BASE.bottom7,
  },
  bottom8: {
    ...BASE.bottom8,
  },
  bottom15: {
    ...BASE.bottom15,
  },
  bottom30: {
    ...BASE.bottom30,
  },
  bottom40: {
    ...BASE.bottom40,
  },
  bottom56: {
    ...BASE.bottom56,
  },
  bottom75: {
    ...BASE.bottom75,
  },


  // height dimension styles
  heightOnDeviceHeight256: {
    ...BASE.heightOnDeviceHeight256,
  },
  marginTopOnHeight110: {
    ...BASE.marginTopOnHeight110,
  },
  top16: {
    ...BASE.top16,
  },
  customModal: {
    height: CONSTANTS.Height,
    width: CONSTANTS.Width,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  topMinus4: {
    ...BASE.topMinus4,
  },
  top8: {
    ...BASE.top8,
  },
  top16: {
    top: CONSTANTS.Width16,
  },
  top43: {
    top: CONSTANTS.Width43,
  },
  top36: {
    top: CONSTANTS.Width36,
  },
  bottom0: {
    bottom: 0,
  },
  right0: {
    right: 0,
  },
  right8: {
    ...BASE.right8,
  },
  right_10: {
    ...BASE.right_10,
  },
  minWidth10: {
    ...BASE.minWidth10,
  },
  minWidth15: {
    ...BASE.minWidth15,
  },
  minWidth20: {
    ...BASE.minWidth20,
  },
  right24:{
    ...BASE.right24
  },
  top10:{
    ...BASE.top10
  },
  top20:{
    ...BASE.top20
  },
  top24:{
    ...BASE.top24
  },
  left12:{
    ...BASE.left12
  },
  left16:{
    ...BASE.left16
  },
  bottom12:{
    ...BASE.bottom12
  },

  cardShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.65,
    elevation: 5,
  },
  cardShadowLite: {
    elevation: 1,
  },
});
