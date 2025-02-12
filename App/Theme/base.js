import {StyleSheet} from 'react-native';

import COLOURS from './colors';
import CONSTANTS from './constants';

export default StyleSheet.create({
  flexOne: {
    flex: 1,
  },
  flexTwo: {
    flex: 2,
  },
  flex10: {
    flex: 0.1,
  },
  flex20: {
    flex: 0.2,
  },
  flex30: {
    flex: 0.3,
  },
  flex40: {
    flex: 0.4,
  },
  flex50: {
    flex: 0.5,
  },
  flex60: {
    flex: 0.6,
  },
  flex70: {
    flex: 0.7,
  },
  flex80: {
    flex: 0.8,
  },
  flex90: {
    flex: 0.9,
  },
  flexGrowOne: {
    flexGrow: 1,
  },
  flexShrink: {
    flexShrink: 1,
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyFlexStart: {
    justifyContent: 'flex-start',
  },
  justifyFlexEnd: {
    justifyContent: 'flex-end',
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  spaceAround: {
    justifyContent: 'space-around',
  },
  textAlignRight: {
    textAlign: 'right',
  },
  alignItemsFlexEnd: {
    alignItems: 'flex-end',
  },
  alignItemsFlexStart: {
    alignItems: 'flex-start',
  },
  alignContentStart: {
    alignContent: 'flex-start',
  },
  alignContentCenter: {
    alignContent: 'center',
  },
  textAlignCenter: {
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  positionAbsoluteBottom: {
    position: 'absolute',
    bottom: 0,
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  overFlow: {
    overflow: 'hidden',
  },
  overFlowVisible: {
    overflow: 'visible',
  },
  alignSelfFlexStart: {
    alignSelf: 'flex-start',
  },
  alignSelfFlexEnd: {
    alignSelf: 'flex-end',
  },
  alignSelfCenter: {
    alignSelf: 'center',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  right: {
    right: 0,
  },
  textAlign: {
    textAlign: 'center',
  },
  textAlignLeft: {
    textAlign: 'left',
  },
  textAlignVerticalTop:{
    textAlignVertical: 'top'
  },

  underLine: {
    textDecorationLine: 'underline',
  },
  lineThrough: {
    textDecorationLine: 'line-through',
  },
  textUppercase: {
    textTransform: 'uppercase',
  },
  activeZindex: {
    zIndex: 1,
  },
  zeroZindex: {
    zIndex: 0,
  },
  zeroZindex1: {
    zIndex: 1,
  },
  opacityDisable: {
    opacity: 0.4,
  },
  flexWrap: {
    flexWrap: 'wrap',
  },
  disabled: {
    opacity: 0.5,
  },
  position: {
    position: 'absolute',
  },

  fullWidth: {
    width: CONSTANTS.FullWidth,
  },
  halfWidth: {
    width: CONSTANTS.HalfWidth,
  },
  fullWidth48: {
    width: CONSTANTS.FullWidth48,
  },
  fullWidth77: {
    width: CONSTANTS.FullWidth77,
  },
  fullWidth80: {
    width: CONSTANTS.FullWidth80,
  },
  fullWidth85: {
    width: CONSTANTS.FullWidth85,
  },
  fullWidth90: {
    width: CONSTANTS.FullWidth90,
  },
  fullHeight: {
    height: '100%',
  },
  
  // font weights
  fontWeight500: {
    fontWeight: '500',
  },

  // font size
  fontSize8: {
    fontSize: CONSTANTS.Width8,
  },
  fontSize9: {
    fontSize: CONSTANTS.Width9,
  },
  fontSize10: {
    fontSize: CONSTANTS.Width10,
  },
  fontSize11: {
    fontSize: CONSTANTS.Width11,
  },
  fontSize12: {
    fontSize: CONSTANTS.Width12,
  },
  fontSize13: {
    fontSize: CONSTANTS.Width13,
  },
  fontSize14: {
    fontSize: CONSTANTS.Width14,
  },
  fontSize16: {
    fontSize: CONSTANTS.Width16,
  },
  fontSize18: {
    fontSize: CONSTANTS.Width18,
  },
  fontSize20: {
    fontSize: CONSTANTS.Width20,
  },
  fontSize22: {
    fontSize: CONSTANTS.Width22,
  },
  fontSize24: {
    fontSize: CONSTANTS.Width24,
  },
  fontSize32: {
    fontSize: CONSTANTS.Width32,
  },

  // line height
  lineHeight12: {
    lineHeight: CONSTANTS.Width12,
  },
  lineHeight14: {
    lineHeight: CONSTANTS.Width14,
  },
  lineHeight15: {
    lineHeight: CONSTANTS.Width15,
  },
  lineHeight16: {
    lineHeight: CONSTANTS.Width16,
  },
  lineHeight17: {
    lineHeight: CONSTANTS.Width17,
  },
  lineHeight18: {
    lineHeight: CONSTANTS.Width18,
  },
  lineHeight19: {
    lineHeight: CONSTANTS.Width19,
  },
  lineHeight20: {
    lineHeight: CONSTANTS.Width20,
  },
  lineHeight21: {
    lineHeight: CONSTANTS.Width21,
  },
  lineHeight22: {
    lineHeight: CONSTANTS.Width22,
  },
  lineHeight24: {
    lineHeight: CONSTANTS.Width24,
  },
  lineHeight26: {
    lineHeight: CONSTANTS.Width26,
  },
  lineHeight29: {
    lineHeight: CONSTANTS.Width29,
  },
  lineheight32:{
    lineHeight: CONSTANTS.Width32
  },
  lineHeight48: {
    lineHeight: CONSTANTS.Width48
  },

  // border width
  borderWidth4: {
    borderWidth: StyleSheet.hairlineWidth * 4,
  },
  borderWidth3: {
    borderWidth: StyleSheet.hairlineWidth * 3,
  },
  borderWidth2: {
    borderWidth: StyleSheet.hairlineWidth * 2,
  },
  borderWidth1: {
    borderWidth: StyleSheet.hairlineWidth * 1,
  },
  borderWidth0: {
    borderWidth: StyleSheet.hairlineWidth * 0,
  },

  borderDash: {
    borderStyle: 'dotted',
    borderRadius: 4,
  },

  dottedBorder: {
    borderStyle: 'dashed',
  },

  // border bottom width
  borderBottomWidth1: {
    borderBottomWidth: CONSTANTS.Width1,
  },
  borderBottomWidth2: {
    borderBottomWidth: CONSTANTS.Width2,
  },
  borderRightWidth1: {
    borderRightWidth: CONSTANTS.Width1,
  },

  borderTopWidth1: {
    borderTopWidth: StyleSheet.hairlineWidth * 1,
  },
  borderTopWidth2: {
    borderTopWidth: StyleSheet.hairlineWidth * 2,
  },
  borderTopWidth3: {
    borderTopWidth: StyleSheet.hairlineWidth * 3,
  },
  
  
  // border bottom width
  borderLeftWidth1: {
    borderLeftWidth: CONSTANTS.Width1,
  },
  borderLeftWidth2: {
    borderLeftWidth: CONSTANTS.Width2,
  },

  // border color
  borderBottomColorBlack:{
    borderBottomColor: COLOURS.BLACK,
  },
  borderBottomColorPlatiniumWhite:{
    borderBottomColor: COLOURS.PLATINIUM_WHITE,
  },
  
  borderColorTransparent: {
    borderColor: 'transparent',
  },
  borderColorBlack:{
    borderColor: COLOURS.BLACK,
  },
  borderColorLightGrey:{
    borderColor: COLOURS.LIGHT_GREY,
  },
  borderColorWhite:{
    borderColor: COLOURS.WHITE
  },
  borderColorGhostWhite:{
    borderColor: COLOURS.GHOST_WHITE,
  },
  

  // letter spacing
  letterSpacingNormal: {
    letterSpacing: 0.2
  },
  letterSpacingHalf: {
    letterSpacing: 0.5
  },
  letterSpacing: {
    letterSpacing: 1,
  },

  // color
  colorBlack: {
    color: COLOURS.BLACK
  },
  colorDarkGrey: {
    color: COLOURS.DARK_GREY
  },
  colorCloudyGrey: {
    color: COLOURS.CLOUDY_GREY
  },
  colorSmokeyGrey: {
    color: COLOURS.SMOKEY_GREY
  },
  colorGraniteGrey: {
    color: COLOURS.GRANITE_GREY
  },
  colorLightGrey: {
    color: COLOURS.LIGHT_GREY
  },
  colorSilver: {
    color: COLOURS.SILVER
  },
  colorPlatiniumWhite: {
    color: COLOURS.PLATINIUM_WHITE
  },
  colorWhite: {
    color: COLOURS.WHITE,
  },
  colorVistaWhite: {
    color: COLOURS.VISTA_WHITE,
  },
  colorGhostWhite: {
    color: COLOURS.GHOST_WHITE,
  },
  colorSmokeWhite: {
    color: COLOURS.SMOKE_WHITE,
  },
  colorGoldenYellow: {
    color: COLOURS.GOLDEN_YELLOW,
  },
  colorDarkOrange: {
    color: COLOURS.DARK_ORANGE,
  },
  colorCoralRed: {
    color: COLOURS.CORAL_RED,
  },
  colorMidGreen: {
    color: COLOURS.MID_GREEN,
  },
  colorDodgerBlue: {
    color: COLOURS.DODGER_BLUE,
  },

  // background color
  backgroundColorTransparent: {
    backgroundColor: 'transparent',
  },
  backgroundColorBlack: {
    backgroundColor: COLOURS.BLACK,
  },
  backgroundColorDarkGrey:{
    backgroundColor: COLOURS.DARK_GREY
  },
  backgroundColorCloudyGrey:{
    backgroundColor: COLOURS.CLOUDY_GREY
  },
  backgroundColorSmokeyGrey:{
    backgroundColor: COLOURS.SMOKEY_GREY
  },
  backgroundColorGraniteGrey:{
    backgroundColor: COLOURS.GRANITE_GREY
  },
  backgroundColorLightGrey:{
    backgroundColor: COLOURS.LIGHT_GREY
  },
  backgroundColorSilver:{
    backgroundColor: COLOURS.SILVER
  },
  backgroundColorPlatiniumWhite:{
    backgroundColor: COLOURS.PLATINIUM_WHITE
  },
  backgroundColorWhite: {
    backgroundColor: COLOURS.WHITE,
  },
  backgroundColorVistaWhite: {
    backgroundColor: COLOURS.VISTA_WHITE,
  },
  backgroundColorGhostWhite: {
    backgroundColor: COLOURS.GHOST_WHITE,
  },
  backgroundColorSmokeWhite:{
    backgroundColor: COLOURS.SMOKE_WHITE
  },
  backgroundColorGoldenYellow: {
    backgroundColor: COLOURS.GOLDEN_YELLOW,
  },
  backgroundColorDarkOrange: {
    backgroundColor: COLOURS.DARK_ORANGE,
  },
  backgroundColorCoralRed: {
    backgroundColor: COLOURS.CORAL_RED,
  },
  backgroundColorMidGreen: {
    backgroundColor: COLOURS.MID_GREEN,
  },
  backgroundColorDodgerBlue:{
    backgroundColor: COLOURS.DODGER_BLUE
  },




  margin16:{
		margin: CONSTANTS.Width16
	},
  marginBottomMinus2:{
		marginBottom: -(CONSTANTS.Width2)
	},
  marginBottomMinus4:{
		marginBottom: -(CONSTANTS.Width4)
	},
  marginBottomMinus6:{
		marginBottom: -(CONSTANTS.Width6)
	},
  marginBottomMinus8:{
		marginBottom: -(CONSTANTS.Width8)
	},
  marginBottomMinus10:{
		marginBottom: -(CONSTANTS.Width10)
	},

  marginTopMinusHalf:{
		marginTop: -(CONSTANTS.WidthHalf)
	},
  marginTopMinus2:{
		marginTop: -(CONSTANTS.Width2)
	},
  marginTopMinus4:{
		marginTop: -(CONSTANTS.Width4)
	},
  marginTopMinus6:{
		marginTop: -(CONSTANTS.Width6)
	},
  marginTopMinus8:{
		marginTop: -(CONSTANTS.Width8)
	},
  marginTopMinus10:{
		marginTop: -(CONSTANTS.Width10)
	},
	marginTopMinus12:{
		marginTop: -(CONSTANTS.Width12)
	},
  marginTopMinus14:{
		marginTop: -(CONSTANTS.Width14)
	},
  marginTopMinus20:{
		marginTop: -(CONSTANTS.Width20)
	},
  marginTopMinus24:{
		marginTop: -(CONSTANTS.Width24)
	},
  marginTopMinus28:{
		marginTop: -(CONSTANTS.Width28)
	},
  marginTopMinus36:{
		marginTop: -(CONSTANTS.Width36)
	},
	marginTopMinus56:{
		marginTop: -(CONSTANTS.Width56)
	},
  marginTopMinus89:{
		marginTop: -(CONSTANTS.Width89)
	},
  marginTopMinus96:{
		marginTop: -(CONSTANTS.Width96)
	},
  marginTopMinus120:{
		marginTop: -(CONSTANTS.Width120)
	},
  marginTopMinus150:{
		marginTop: -(CONSTANTS.Width150)
	},
  marginTopMinus175:{
		marginTop: -(CONSTANTS.Width175)
	},
  marginTop2: {
    marginTop: CONSTANTS.Width2,
  },
  marginTop3: {
    marginTop: CONSTANTS.Width3,
  },
  marginTop4: {
    marginTop: CONSTANTS.Width4,
  },
  marginTop5: {
    marginTop: CONSTANTS.Width5,
  },
  marginTop6: {
    marginTop: CONSTANTS.Width6,
  },
  marginTop7: {
    marginTop: CONSTANTS.Width7,
  },
  marginTop8: {
    marginTop: CONSTANTS.Width8,
  },
  marginTop10: {
    marginTop: CONSTANTS.Width10,
  },
  marginTop11: {
    marginTop: CONSTANTS.Width11,
  },
  marginTop12: {
    marginTop: CONSTANTS.Width12,
  },
  marginTop14: {
    marginTop: CONSTANTS.Width14,
  },
  marginTop16: {
    marginTop: CONSTANTS.Width16,
  },
  marginTop18: {
    marginTop: CONSTANTS.Width18,
  },
  marginTop20: {
    marginTop: CONSTANTS.Width20,
  },
  marginTop22: {
    marginTop: CONSTANTS.Width22,
  },
  marginTop24: {
    marginTop: CONSTANTS.Width24,
  },
  marginTop27: {
    marginTop: CONSTANTS.Width27,
  },
  marginTop28: {
    marginTop: CONSTANTS.Width28,
  },
  marginTop30: {
    marginTop: CONSTANTS.Width30,
  },
  marginTop32: {
    marginTop: CONSTANTS.Width32,
  },
  marginTop39: {
    marginTop: CONSTANTS.Width39,
  },
  marginTop40: {
    marginTop: CONSTANTS.Width40,
  },
  marginTop42: {
    marginTop: CONSTANTS.Width42,
  },
  marginTop46: {
    marginTop: CONSTANTS.Width46
  },
  marginTop48: {
    marginTop: CONSTANTS.Width48,
  },
  marginTop56: {
    marginTop: CONSTANTS.Width56,
  },
  marginTop64: {
    marginTop: CONSTANTS.Width64,
  },
  marginTop70: {
    marginTop: CONSTANTS.Width70,
  },
  marginTop71: {
    marginTop: CONSTANTS.Width71,
  },
  marginTop104: {
    marginTop: CONSTANTS.Width104,
  },
  marginTop136: {
    marginTop: CONSTANTS.Width136,
  },

  // margin bottom
  marginBottom4: {
    marginBottom: CONSTANTS.Width4,
  },
  marginBottom6: {
    marginBottom: CONSTANTS.Width6,
  },
  marginBottom8: {
    marginBottom: CONSTANTS.Width8,
  },
  marginBottom10: {
    marginBottom: CONSTANTS.Width10,
  },
  marginBottom12: {
    marginBottom: CONSTANTS.Width12,
  },
  marginBottom14: {
    marginBottom: CONSTANTS.Width14,
  },
  marginBottom16: {
    marginBottom: CONSTANTS.Width16,
  },
  marginBottom18: {
    marginBottom: CONSTANTS.Width18,
  },
  marginBottom20: {
    marginBottom: CONSTANTS.Width20,
  },
  marginBottom24: {
    marginBottom: CONSTANTS.Width24,
  },
  marginBottom26: {
    marginBottom: CONSTANTS.Width26,
  },
  marginBottom28: {
    marginBottom: CONSTANTS.Width28,
  },
  marginBottom30: {
    marginBottom: CONSTANTS.Width30,
  },
  marginBottom32: {
    marginBottom: CONSTANTS.Width32,
  },
  marginBottom34: {
    marginBottom: CONSTANTS.Width34,
  },
  marginBottom40: {
    marginBottom: CONSTANTS.Width40,
  },
  marginBottom56: {
    marginBottom: CONSTANTS.Width56,
  },
  marginBottom96: {
    marginBottom: CONSTANTS.Width96,
  },
  marginBottom120: {
    marginBottom: CONSTANTS.Width120,
  },
  marginBottom147: {
    marginBottom: CONSTANTS.Width147,
  },


  // marginLeft
  marginLeftMinus1:{
		marginLeft: -(CONSTANTS.Width1)
	},
  marginLeftMinus2:{
		marginLeft: -(CONSTANTS.Width2)
	},
  marginLeftMinus4:{
		marginLeft: -(CONSTANTS.Width4)
	},
  marginLeftMinus8:{
		marginLeft: -(CONSTANTS.Width8)
	},
  marginLeftMinus10:{
		marginLeft: -(CONSTANTS.Width10)
	},
  marginLeftMinus12:{
		marginLeft: -(CONSTANTS.Width12)
	},
  marginLeftMinus14:{
		marginLeft: -(CONSTANTS.Width14)
	},
  marginLeftMinus16:{
		marginLeft: -(CONSTANTS.Width16)
	},
  marginLeftMinus18:{
		marginLeft: -(CONSTANTS.Width18)
	},
  marginLeftMinus20:{
		marginLeft: -(CONSTANTS.Width20)
	},
  marginLeftMinus22:{
		marginLeft: -(CONSTANTS.Width22)
	},
  marginLeftMinus24:{
		marginLeft: -(CONSTANTS.Width24)
	},
  marginLeftMinus26:{
		marginLeft: -(CONSTANTS.Width26)
	},
  marginLeftMinus28:{
		marginLeft: -(CONSTANTS.Width28)
	},
  marginLeftMinus30:{
		marginLeft: -(CONSTANTS.Width30)
	},
  marginLeft2: {
    marginLeft: CONSTANTS.Width2,
  },
  marginLeft4: {
    marginLeft: CONSTANTS.Width4,
  },
  marginLeft5: {
    marginLeft: CONSTANTS.Width5,
  },
  marginLeft6: {
    marginLeft: CONSTANTS.Width6,
  },
  marginLeft8: {
    marginLeft: CONSTANTS.Width8,
  },
  marginLeft10: {
    marginLeft: CONSTANTS.Width10,
  },
  marginLeft11: {
    marginLeft: CONSTANTS.Width11,
  },
  marginLeft12: {
    marginLeft: CONSTANTS.Width12,
  },
  marginLeft14: {
    marginLeft: CONSTANTS.Width14,
  },
  marginLeft16: {
    marginLeft: CONSTANTS.Width16,
  },
  marginLeft20: {
    marginLeft: CONSTANTS.Width20,
  },
  marginLeft22: {
    marginLeft: CONSTANTS.Width22,
  },
  marginLeft24: {
    marginLeft: CONSTANTS.Width24,
  },
  marginLeft26: {
    marginLeft: CONSTANTS.Width26,
  },
  marginLeft27: {
    marginLeft: CONSTANTS.Width27,
  },
  marginLeft40: {
    marginLeft: CONSTANTS.Width40,
  },

  // marginRight
  marginRight2: {
    marginRight: CONSTANTS.Width2,
  },
  marginRight4: {
    marginRight: CONSTANTS.Width4,
  },
  marginRight5: {
    marginRight: CONSTANTS.Width5,
  },
  marginRight6: {
    marginRight: CONSTANTS.Width6,
  },
  marginRight8: {
    marginRight: CONSTANTS.Width8,
  },
  marginRight10: {
    marginRight: CONSTANTS.Width10,
  },
  marginRight12: {
    marginRight: CONSTANTS.Width12,
  },
  marginRight14: {
    marginRight: CONSTANTS.Width14,
  },
  marginRight16: {
    marginRight: CONSTANTS.Width16,
  },
  marginRight20: {
    marginRight: CONSTANTS.Width20,
  },
  marginRight24: {
    marginRight: CONSTANTS.Width24,
  },
  marginRight34: {
    marginRight: CONSTANTS.Width34,
  },
  // padding right
  paddingRight20: {
    paddingRight: CONSTANTS.Width20,
  },
  paddingRight40: {
    paddingRight: CONSTANTS.Width40,
  },
  paddingRight60: {
    paddingRight: CONSTANTS.Width60,
  },
  paddingRight144: {
    paddingRight: CONSTANTS.Width144,
  },

  // padding bottom
  paddingBottom4: {
    paddingBottom: CONSTANTS.Width4,
  },
  paddingBottom8: {
    paddingBottom: CONSTANTS.Width8,
  },
  paddingBottom12: {
    paddingBottom: CONSTANTS.Width12,
  },
  paddingBottom16: {
    paddingBottom: CONSTANTS.Width16,
  },
  paddingBottom18: {
    paddingBottom: CONSTANTS.Width18,
  },
  paddingBottom20: {
    paddingBottom: CONSTANTS.Width20,
  },
  paddingBottom24: {
    paddingBottom: CONSTANTS.Width24,
  },
  paddingBottom32: {
    paddingBottom: CONSTANTS.Width32,
  },
  paddingBottom48: {
    paddingBottom: CONSTANTS.Width48,
  },
  paddingBottom56: {
    paddingBottom: CONSTANTS.Width56,
  },
  paddingBottom62: {
    paddingBottom: CONSTANTS.Width62,
  },
  paddingBottom64: {
    paddingBottom: CONSTANTS.Width64,
  },
  paddingBottom72: {
    paddingBottom: CONSTANTS.Width72,
  },
  paddingBottom80: {
    paddingBottom: CONSTANTS.Width80,
  },
  paddingBottom96: {
    paddingBottom: CONSTANTS.Width96,
  },
  paddingBottom100: {
    paddingBottom: CONSTANTS.Width100,
  },
  paddingBottom124: {
    paddingBottom: CONSTANTS.Width124,
  },
  paddingBottom147: {
    paddingBottom: CONSTANTS.Width147,
  },
  paddingBottom153: {
    paddingBottom: CONSTANTS.Width153,
  },
  paddingBottom230: {
    paddingBottom: CONSTANTS.Width230,
  },

  // padding top
  paddingTop2: {
    paddingTop: CONSTANTS.Width2,
  },
  paddingTop4: {
    paddingTop: CONSTANTS.Width4,
  },
  paddingTop6: {
    paddingTop: CONSTANTS.Width6,
  },
  paddingTop8: {
    paddingTop: CONSTANTS.Width8,
  },
  paddingTop9: {
    paddingTop: CONSTANTS.Width9,
  },
  paddingTop10: {
    paddingTop: CONSTANTS.Width10,
  },
  paddingTop12: {
    paddingTop: CONSTANTS.Width12,
  },
  paddingTop13: {
    paddingTop: CONSTANTS.Width13,
  },
  paddingTop14: {
    paddingTop: CONSTANTS.Width14,
  },
  paddingTop16: {
    paddingTop: CONSTANTS.Width16,
  },
  paddingTop18: {
    paddingTop: CONSTANTS.Width18,
  },
  paddingTop20: {
    paddingTop: CONSTANTS.Width20,
  },
  paddingTop24: {
    paddingTop: CONSTANTS.Width24,
  },
  paddingTop35: {
    paddingTop: CONSTANTS.Width35,
  },
  paddingTop56: {
    paddingTop: CONSTANTS.Width56,
  },
  paddingTop69: {
    paddingTop: CONSTANTS.Width69,
  },
  paddingTop100: {
    paddingTop: CONSTANTS.Width100,
  },
  paddingTop156: {
    paddingTop: CONSTANTS.Width156,
  },

  // padding left
  paddingLeft2: {
    paddingLeft: CONSTANTS.Width2,
  },
  paddingLeft7: {
    paddingLeft: CONSTANTS.Width7,
  },
  paddingLeft10: {
    paddingLeft: CONSTANTS.Width10,
  },
  paddingLeft19: {
    paddingLeft: CONSTANTS.Width19,
  },
  paddingLeft31: {
    paddingLeft: CONSTANTS.Width31,
  },

  // width
  heightWidth4: {
    width: CONSTANTS.Width4,
    height: CONSTANTS.Width4,
  },
  heightWidth5: {
    width: CONSTANTS.Width5,
    height: CONSTANTS.Width5,
  },
  heightWidth6: {
    width: CONSTANTS.Width6,
    height: CONSTANTS.Width6,
  },
  heightWidth8: {
    width: CONSTANTS.Width8,
    height: CONSTANTS.Width8,
  },
  heightWidth10: {
    width: CONSTANTS.Width10,
    height: CONSTANTS.Width10,
  },
  heightWidth12: {
    width: CONSTANTS.Width12,
    height: CONSTANTS.Width12,
  },
  heightWidth14: {
    width: CONSTANTS.Width14,
    height: CONSTANTS.Width14,
  },
  heightWidth15: {
    width: CONSTANTS.Width15,
    height: CONSTANTS.Width15,
  },
  heightWidth16: {
    width: CONSTANTS.Width16,
    height: CONSTANTS.Width16,
  },
  heightWidth18: {
    width: CONSTANTS.Width18,
    height: CONSTANTS.Width18,
  },
  heightWidth20: {
    width: CONSTANTS.Width20,
    height: CONSTANTS.Width20,
  },
  heightWidth22: {
    width: CONSTANTS.Width22,
    height: CONSTANTS.Width22,
  },
  heightWidth24: {
    width: CONSTANTS.Width24,
    height: CONSTANTS.Width24,
  },
  heightWidth26: {
    width: CONSTANTS.Width26,
    height: CONSTANTS.Width26,
  },
  heightWidth28: {
    width: CONSTANTS.Width28,
    height: CONSTANTS.Width28,
  },
  heightWidth30: {
    width: CONSTANTS.Width30,
    height: CONSTANTS.Width30,
  },
  heightWidth32: {
    width: CONSTANTS.Width32,
    height: CONSTANTS.Width32,
  },
  heightWidth36: {
    width: CONSTANTS.Width36,
    height: CONSTANTS.Width36,
  },
  heightWidth40: {
    width: CONSTANTS.Width40,
    height: CONSTANTS.Width40,
  },
  heightWidth42: {
    width: CONSTANTS.Width42,
    height: CONSTANTS.Width42,
  },
  heightWidth48: {
    width: CONSTANTS.Width48,
    height: CONSTANTS.Width48,
  },
  heightWidth56: {
    width: CONSTANTS.Width56,
    height: CONSTANTS.Width56,
  },
  heightWidth60: {
    width: CONSTANTS.Width60,
    height: CONSTANTS.Width60,
  },
  heightWidth64: {
    width: CONSTANTS.Width64,
    height: CONSTANTS.Width64,
  },
  heightWidth67: {
    width: CONSTANTS.Width67,
    height: CONSTANTS.Width67,
  },
  heightWidth72: {
    width: CONSTANTS.Width72,
    height: CONSTANTS.Width72,
  },
  heightWidth85: {
    width: CONSTANTS.Width85,
    height: CONSTANTS.Width85,
  },
  heightWidth88: {
    width: CONSTANTS.Width88,
    height: CONSTANTS.Width88,
  },
  heightWidth98: {
    width: CONSTANTS.Width98,
    height: CONSTANTS.Width98,
  },
  heightWidth100: {
    width: CONSTANTS.Width100,
    height: CONSTANTS.Width100,
  },
  heightWidth102: {
    width: CONSTANTS.Width102,
    height: CONSTANTS.Width102,
  },
  heightWidth104: {
    width: CONSTANTS.Width104,
    height: CONSTANTS.Width104,
  },
  heightWidth116: {
    width: CONSTANTS.Width116,
    height: CONSTANTS.Width116,
  },
  heightWidth124: {
    width: CONSTANTS.Width124,
    height: CONSTANTS.Width124,
  },
  heightWidth141: {
    width: CONSTANTS.Width141,
    height: CONSTANTS.Width141,
  },
  heightWidth180: {
    width: CONSTANTS.Width180,
    height: CONSTANTS.Width180,
  },
  heightWidth218: {
    width: CONSTANTS.Width218,
    height: CONSTANTS.Width218,
  },
  heightWidth240: {
    width: CONSTANTS.Width240,
    height: CONSTANTS.Width240,
  },
  heightWidth260: {
    width: CONSTANTS.Width260,
    height: CONSTANTS.Width260,
  },
  heightWidth290: {
    width: CONSTANTS.Width290,
    height: CONSTANTS.Width290,
  },

  // width
  width: {
    width: CONSTANTS.Width,
  },
  width1: {
    width: CONSTANTS.Width1,
  },
  width2: {
    width: CONSTANTS.Width2,
  },
  width6: {
    width: CONSTANTS.Width6,
  },
  width8: {
    width: CONSTANTS.Width8,
  },
  width10: {
    width: CONSTANTS.Width10,
  },
  width12: {
    width: CONSTANTS.Width12,
  },
  width16: {
    width: CONSTANTS.Width16,
  },
  width20: {
    width: CONSTANTS.Width20,
  },
  width24: {
    width: CONSTANTS.Width24,
  },
  width70: {
    width: CONSTANTS.Width70,
  },
  Width74: {
    width: CONSTANTS.Width74,
  },
  Width75: {
    width: CONSTANTS.Width75,
  },
  width95: {
    width: CONSTANTS.Width95,
  },
  Width112: {
    width: CONSTANTS.Width112,
  },
  Width113: {
    width: CONSTANTS.Width113,
  },
  Width114: {
    width: CONSTANTS.Width114,
  },
  width115: {
    width: CONSTANTS.Width115,
  },
  width120: {
    width: CONSTANTS.Width120,
  },
  Width153: {
    width: CONSTANTS.Width153,
  },
  Width155: {
    width: CONSTANTS.Width155,
  },
  Width175: {
    width: CONSTANTS.Width175,
  },
  Width176: {
    width: CONSTANTS.Width176,
  },
  Width180: {
    width: CONSTANTS.Width180,
  },
  width182: {
    width: CONSTANTS.Width182,
  },
  width183: {
    width: CONSTANTS.Width183,
  },
  width188: {
    width: CONSTANTS.Width188,
  },
  Width191: {
    width: CONSTANTS.Width191,
  },
  width194: {
    width: CONSTANTS.Width194,
  },
  width196: {
    width: CONSTANTS.Width196,
  },
  Width28: {
    width: CONSTANTS.Width28,
  },
  Width32: {
    width: CONSTANTS.Width32,
  },
  Width35: {
    width: CONSTANTS.Width35,
  },
  Width37: {
    width: CONSTANTS.Width37,
  },
  Width40: {
    width: CONSTANTS.Width40,
  },
  Width44: {
    width: CONSTANTS.Width44,
  },
  Width46: {
    width: CONSTANTS.Width46,
  },
  Width48: {
    width: CONSTANTS.Width48,
  },
  Width52: {
    width: CONSTANTS.Width52,
  },
  Width54: {
    width: CONSTANTS.Width54,
  },
  Width59: {
    width: CONSTANTS.Width59,
  },
  Width62: {
    width: CONSTANTS.Width62,
  },
  Width65: {
    width: CONSTANTS.Width65,
  },
  Width68: {
    width: CONSTANTS.Width68,
  },
  Width72: {
    width: CONSTANTS.Width72,
  },
  Width78: {
    width: CONSTANTS.Width78,
  },
  Width82: {
    width: CONSTANTS.Width82,
  },
  Width84: {
    width: CONSTANTS.Width84,
  },
  Width89: {
    width: CONSTANTS.Width89,
  },
  Width90: {
    width: CONSTANTS.Width90,
  },
  Width91: {
    width: CONSTANTS.Width91,
  },
  Width93: {
    width: CONSTANTS.Width93,
  },
  width94: {
    width: CONSTANTS.Width94,
  },
  Width98: {
    width: CONSTANTS.Width98,
  },
  Width99: {
    width: CONSTANTS.Width99,
  },
  Width100: {
    width: CONSTANTS.Width100,
  },
  Width102: {
    width: CONSTANTS.Width102,
  },
  Width104: {
    width: CONSTANTS.Width104,
  },
  Width110: {
    width: CONSTANTS.Width110,
  },
  Width118: {
    width: CONSTANTS.Width118,
  },
  Width130: {
    width: CONSTANTS.Width130,
  },
  Width133: {
    width: CONSTANTS.Width133,
  },
  Width134: {
    width: CONSTANTS.Width134,
  },
  Width138: {
    width: CONSTANTS.Width138,
  },
  Width142: {
    width: CONSTANTS.Width142,
  },
  Width148: {
    width: CONSTANTS.Width148,
  },
  Width156: {
    width: CONSTANTS.Width156,
  },
  Width162: {
    width: CONSTANTS.Width162,
  },
  Width172: {
    width: CONSTANTS.Width172,
  },
  Width180: {
    width: CONSTANTS.Width180,
  },
  Width182: {
    width: CONSTANTS.Width182,
  },
  width210: {
    width: CONSTANTS.Width210,
  },
  width218: {
    width: CONSTANTS.Width218,
  },
  width225: {
    width: CONSTANTS.Width225,
  },
  width200: {
    width: CONSTANTS.Width200,
  },
  Width230: {
    width: CONSTANTS.Width230,
  },
  Width238: {
    width: CONSTANTS.Width238,
  },
  Width240: {
    width: CONSTANTS.Width240,
  },
  Width243: {
    width: CONSTANTS.Width243,
  },
  Width246: {
    width: CONSTANTS.Width246,
  },
  width250: {
    width: CONSTANTS.Width250,
  },
  width258: {
    width: CONSTANTS.Width258,
  },
  width267: {
    width: CONSTANTS.Width267,
  },
  width278: {
    width: CONSTANTS.Width278,
  },
  width286: {
    width: CONSTANTS.Width286,
  },
  width288: {
    width: CONSTANTS.Width288,
  },
  width290: {
    width: CONSTANTS.Width290,
  },
  width280: {
    width: CONSTANTS.Width280,
  },
  width268: {
    width: CONSTANTS.Width268,
  },
  width270: {
    width: CONSTANTS.Width270,
  },
  width291: {
    width: CONSTANTS.Width291,
  },
  width296: {
    width: CONSTANTS.Width296,
  },
  Width306: {
    width: CONSTANTS.Width306,
  },
  Width316: {
    width: CONSTANTS.Width316,
  },
  Width318: {
    width: CONSTANTS.Width318,
  },
  Width326: {
    width: CONSTANTS.Width326,
  },
  Width328: {
    width: CONSTANTS.Width328,
  },
  width342: {
    width: CONSTANTS.Width342,
  },
  width348: {
    width: CONSTANTS.Width348,
  },
  width336: {
    width: CONSTANTS.Width336,
  },
  width338: {
    width: CONSTANTS.Width338,
  },
  width340: {
    width: CONSTANTS.Width340,
  },
  width358: {
    width: CONSTANTS.Width358,
  },
  width366: {
    width: CONSTANTS.Width366,
  },
  width370: {
    width: CONSTANTS.Width370,
  },
  width374: {
    width: CONSTANTS.Width374,
  },

  // height
  height1: {
    height: StyleSheet.hairlineWidth * 1,
  },
  height2: {
    height: CONSTANTS.Width2,
  },
  height4: {
    height: CONSTANTS.Width4,
  },
  height8: {
    height: CONSTANTS.Width8,
  },
  height10: {
    height: CONSTANTS.Width10,
  },
  height11: {
    height: CONSTANTS.Width11,
  },
  height12: {
    height: CONSTANTS.Width12,
  },
  height13: {
    height: CONSTANTS.Width13,
  },
  height14: {
    height: CONSTANTS.Width14,
  },
  height15: {
    height: CONSTANTS.Width15,
  },
  height17: {
    height: CONSTANTS.Width17,
  },
  height18: {
    height: CONSTANTS.Width18,
  },
  height20: {
    height: CONSTANTS.Width20,
  },
  height22: {
    height: CONSTANTS.Width22,
  },
  height24: {
    height: CONSTANTS.Width24,
  },
  height25: {
    height: CONSTANTS.Width25,
  },
  height28: {
    height: CONSTANTS.Width28,
  },
  height29: {
    height: CONSTANTS.Width29,
  },
  height30: {
    height: CONSTANTS.Width30,
  },
  height32: {
    height: CONSTANTS.Width32,
  },
  height34: {
    height: CONSTANTS.Width34,
  },
  height36: {
    height: CONSTANTS.Width36,
  },
  height37: {
    height: CONSTANTS.Width37,
  },
  height38: {
    height: CONSTANTS.Width38,
  },
  height40: {
    height: CONSTANTS.Width40,
  },
  height42: {
    height: CONSTANTS.Width42,
  },
  height43: {
    height: CONSTANTS.Width43,
  },
  height44: {
    height: CONSTANTS.Width44,
  },
  height46: {
    height: CONSTANTS.Width46,
  },
  height47: {
    height: CONSTANTS.Width47,
  },
  height48: {
    height: CONSTANTS.Width48,
  },
  height49: {
    height: CONSTANTS.Width49,
  },
  height52: {
    height: CONSTANTS.Width52,
  },
  height53: {
    height: CONSTANTS.Width53,
  },
  height56: {
    height: CONSTANTS.Width56,
  },
  height60: {
    height: CONSTANTS.Width60,
  },
  height67: {
    height: CONSTANTS.Width67,
  },
  height64: {
    height: CONSTANTS.Width64,
  },
  height70: {
    height: CONSTANTS.Width70,
  },
  height72: {
    height: CONSTANTS.Width72,
  },
  height80: {
    height: CONSTANTS.Width80,
  },
  height84: {
    height: CONSTANTS.Width84,
  },
  height95: {
    height: CONSTANTS.Width95,
  },
  height98: {
    height: CONSTANTS.Width98,
  },
  height100: {
    height: CONSTANTS.Width100,
  },
  height105: {
    height: CONSTANTS.Width105,
  },
  height107: {
    height: CONSTANTS.Width107,
  },
  height110: {
    height: CONSTANTS.Width110,
  },
  height112: {
    height: CONSTANTS.Width112,
  },
  height117: {
    height: CONSTANTS.Width117,
  },
  height120: {
    height: CONSTANTS.Width120,
  },
  height123: {
    height: CONSTANTS.Width123,
  },
  height128: {
    height: CONSTANTS.Width128,
  },
  height130: {
    height: CONSTANTS.Width130,
  },
  height139: {
    height: CONSTANTS.Width139,
  },
  height140: {
    height: CONSTANTS.Width140,
  },
  height162: {
    height: CONSTANTS.Width162,
  },
  height164: {
    height: CONSTANTS.Width164,
  },
  height169: {
    height: CONSTANTS.Width169,
  },
  height141: {
    height: CONSTANTS.Width141,
  },
  height146: {
    height: CONSTANTS.Width146,
  },
  height148: {
    height: CONSTANTS.Width148,
  },
  height150: {
    height: CONSTANTS.Width150,
  },
  height152: {
    height: CONSTANTS.Width152,
  },
  height153: {
    height: CONSTANTS.Width153,
  },
  height156: {
    height: CONSTANTS.Width156,
  },
  height172: {
    height: CONSTANTS.Width172,
  },
  height178: {
    height: CONSTANTS.Width178,
  },
  height186: {
    height: CONSTANTS.Width186,
  },
  height180: {
    height: CONSTANTS.Width180,
  },
  height194: {
    height: CONSTANTS.Width194,
  },
  height196: {
    height: CONSTANTS.Width196,
  },
  height200: {
    height: CONSTANTS.Width200,
  },
  height208: {
    height: CONSTANTS.Width208,
  },
  height211: {
    height: CONSTANTS.Width211,
  },
  height219: {
    height: CONSTANTS.Width219,
  },
  height226: {
    height: CONSTANTS.Width226,
  },
  height230: {
    height: CONSTANTS.Width230,
  },
  height231: {
    height: CONSTANTS.Width231,
  },
  height238: {
    height: CONSTANTS.Width238,
  },
  height240: {
    height: CONSTANTS.Width240,
  },
  height245: {
    height: CONSTANTS.Width245,
  },
  height250: {
    height: CONSTANTS.Width250,
  },
  height260: {
    height: CONSTANTS.Width260,
  },
  height278: {
    height: CONSTANTS.Width278,
  },
  height282: {
    height: CONSTANTS.Width282,
  },
  height288: {
    height: CONSTANTS.Width288,
  },
  height290: {
    height: CONSTANTS.Width290,
  },
  height320: {
    height: CONSTANTS.Width320,
  },
  height322: {
    height: CONSTANTS.Width322,
  },
  height336: {
    height: CONSTANTS.Width336,
  },
  height341: {
    height: CONSTANTS.Width341,
  },
  height346: {
    height: CONSTANTS.Width346,
  },
  height349: {
    height: CONSTANTS.Width349,
  },
  height352: {
    height: CONSTANTS.Width352,
  },
  height360: {
    height: CONSTANTS.Width360,
  },
  height370: {
    height: CONSTANTS.Width370,
  },
  height405: {
    height: CONSTANTS.Width405,
  },
  height410: {
    height: CONSTANTS.Width410,
  },
  height420: {
    height: CONSTANTS.Width420,
  },
  height428: {
    height: CONSTANTS.Width428,
  },
  height445: {
    height: CONSTANTS.Width445,
  },
  height465: {
    height: CONSTANTS.Width465,
  },
  height495: {
    height: CONSTANTS.Width495,
  },
  height512: {
    height: CONSTANTS.Width512,
  },
  height582: {
    height: CONSTANTS.Width582,
  },

  // opacity
  opacity0: {
    opacity: CONSTANTS.opacity0,
  },
  opacity4: {
    opacity: CONSTANTS.opacity4,
  },
  opacity12: {
    opacity: CONSTANTS.opacity12,
  },
  opacity24: {
    opacity: CONSTANTS.opacity24,
  },
  opacity48: {
    opacity: CONSTANTS.opacity48,
  },
  opacity50: {
    opacity: CONSTANTS.opacity50,
  },
  opacity60: {
    opacity: CONSTANTS.opacity60,
  },
  opacity64: {
    opacity: CONSTANTS.opacity64,
  },
  opacity75: {
    opacity: CONSTANTS.opacity75,
  },
  opacity80: {
    opacity: CONSTANTS.opacity80,
  },
  opacity85: {
    opacity: CONSTANTS.opacity85,
  },
  opacity90: {
    opacity: CONSTANTS.opacity90,
  },

  // padding horizontal
  paddingHorizontal4: {
    paddingHorizontal: CONSTANTS.Width4,
  },
  paddingHorizontal6: {
    paddingHorizontal: CONSTANTS.Width6,
  },
  paddingVertical5: {
    paddingVertical: CONSTANTS.Width5,
  },
  paddingHorizontal8: {
    paddingHorizontal: CONSTANTS.Width8,
  },
  paddingHorizontal9: {
    paddingHorizontal: CONSTANTS.Width9,
  },
  paddingHorizontal10: {
    paddingHorizontal: CONSTANTS.Width10,
  },
  paddingHorizontal12: {
    paddingHorizontal: CONSTANTS.Width12,
  },
  paddingHorizontal14: {
    paddingHorizontal: CONSTANTS.Width14,
  },
  paddingHorizontal16: {
    paddingHorizontal: CONSTANTS.Width16,
  },
  paddingHorizontal18: {
    paddingHorizontal: CONSTANTS.Width18,
  },
  paddingHorizontal20: {
    paddingHorizontal: CONSTANTS.Width20,
  },
  paddingHorizontal24: {
    paddingHorizontal: CONSTANTS.Width24,
  },
  paddingHorizontal32: {
    paddingHorizontal: CONSTANTS.Width32,
  },
  paddingHorizontal38: {
    paddingHorizontal: CONSTANTS.Width38,
  },
  paddingHorizontal118: {
    paddingHorizontal: CONSTANTS.Width118,
  },

  marginHorizontal4: {
    marginHorizontal: CONSTANTS.Width4
  },
  marginHorizontal8: {
    marginHorizontal: CONSTANTS.Width8
  },
  marginHorizontal12: {
    marginHorizontal: CONSTANTS.Width12
  },
  marginHorizontal16: {
    marginHorizontal: CONSTANTS.Width16
  },
  marginHorizontal20: {
    marginHorizontal: CONSTANTS.Width20
  },
  marginHorizontal24: {
    marginHorizontal: CONSTANTS.Width24
  },

  // padding left
  paddingLeft4: {
    paddingLeft: CONSTANTS.Width4,
  },
  paddingLeft8: {
    paddingLeft: CONSTANTS.Width8,
  },
  paddingLeft12: {
    paddingLeft: CONSTANTS.Width12,
  },
  paddingLeft14: {
    paddingLeft: CONSTANTS.Width14,
  },
  paddingLeft16: {
    paddingLeft: CONSTANTS.Width16,
  },
  paddingLeft22: {
    paddingLeft: CONSTANTS.Width22,
  },
  paddingLeft24: {
    paddingLeft: CONSTANTS.Width24,
  },

  // padding right
  paddingRight2: {
    paddingRight: CONSTANTS.Width2,
  },
  paddingRight4: {
    paddingRight: CONSTANTS.Width4,
  },
  paddingRight6: {
    paddingRight: CONSTANTS.Width6,
  },
  paddingRight8: {
    paddingRight: CONSTANTS.Width8,
  },
  paddingRight10: {
    paddingRight: CONSTANTS.Width10,
  },
  paddingRight16: {
    paddingRight: CONSTANTS.Width16,
  },
  paddingRight24: {
    paddingRight: CONSTANTS.Width24,
  },
  paddingRight28: {
    paddingRight: CONSTANTS.Width28,
  },

  // padding vertical
  paddingVertical2: {
    paddingVertical: CONSTANTS.Width2,
  },
  paddingVertical4: {
    paddingVertical: CONSTANTS.Width4,
  },
  paddingVertical5: {
    paddingVertical: CONSTANTS.Width5,
  },
  paddingVertical6: {
    paddingVertical: CONSTANTS.Width6,
  },
  paddingVertical7: {
    paddingVertical: CONSTANTS.Width7,
  },
  paddingVertical8: {
    paddingVertical: CONSTANTS.Width8,
  },
  paddingVertical10: {
    paddingVertical: CONSTANTS.Width10,
  },
  paddingVertical12: {
    paddingVertical: CONSTANTS.Width12,
  },
  paddingVertical16: {
    paddingVertical: CONSTANTS.Width16,
  },
  paddingVertical20: {
    paddingVertical: CONSTANTS.Width20,
  },
  paddingVertical22: {
    paddingVertical: CONSTANTS.Width22,
  },
  paddingVertical24: {
    paddingVertical: CONSTANTS.Width24,
  },

  // padding
  padding0: {
    padding: 0,
  },
  padding1: {
    padding: CONSTANTS.Width1,
  },
  padding2: {
    padding: CONSTANTS.Width2,
  },
  padding4: {
    padding: CONSTANTS.Width4,
  },
  padding8: {
    padding: CONSTANTS.Width8,
  },
  padding9: {
    padding: CONSTANTS.Width9,
  },
  padding10: {
    padding: CONSTANTS.Width10,
  },
  padding12: {
    padding: CONSTANTS.Width12,
  },
  padding14: {
    padding: CONSTANTS.Width14,
  },
  padding16: {
    padding: CONSTANTS.Width16,
  },
  padding24: {
    padding: CONSTANTS.Width24,
  },

  // padding bottom
  paddingBottom2: {
    paddingBottom: CONSTANTS.Width2,
  },

  // border radius
  borderRadius2: {
    borderRadius: CONSTANTS.Width2,
  },
  borderRadius4: {
    borderRadius: CONSTANTS.Width4,
  },
  borderRadius5: {
    borderRadius: CONSTANTS.Width5,
  },
  borderRadius6: {
    borderRadius: CONSTANTS.Width6,
  },
  borderRadius8: {
    borderRadius: CONSTANTS.Width8,
  },
  borderRadius10: {
    borderRadius: CONSTANTS.Width10,
  },
  borderRadius12: {
    borderRadius: CONSTANTS.Width12,
  },
  borderRadius15: {
    borderRadius: CONSTANTS.Width15,
  },
  borderRadius16: {
    borderRadius: CONSTANTS.Width16,
  },
  borderRadius20: {
    borderRadius: CONSTANTS.Width20,
  },
  borderRadius30: {
    borderRadius: CONSTANTS.Width30,
  },
  borderRadius32: {
    borderRadius: CONSTANTS.Width32,
  },
  borderRadius100: {
    borderRadius: CONSTANTS.Width100,
  },
  borderTopLeftRadius10: {
    borderTopLeftRadius: CONSTANTS.Width10,
  },
  borderTopRightRadius10: {
    borderTopRightRadius: CONSTANTS.Width10,
  },
  borderTopLeftRadius16: {
    borderTopLeftRadius: CONSTANTS.Width16,
  },
  borderTopRightRadius16: {
    borderTopRightRadius: CONSTANTS.Width16,
  },
  borderBottomRightRadius16: {
    borderBottomRightRadius: CONSTANTS.Width16,
  },
  borderBottomLeftRadius16:{
    borderBottomLeftRadius: CONSTANTS.Width16,
  },
  borderTopRightRadius8: {
    borderTopRightRadius: CONSTANTS.Width8,
  },
  borderTopLeftRadius8: {
    borderTopLeftRadius: CONSTANTS.Width8,
  },
  borderBottomLeftRadius8: {
    borderBottomLeftRadius: CONSTANTS.Width8,
  },
  borderBottomRightRadius8: {
    borderBottomRightRadius: CONSTANTS.Width8,
  },

  maxWidth65: {
    maxWidth: CONSTANTS.Width65,
  },
  maxWidth114: {
    maxWidth: CONSTANTS.Width114,
  },
  maxHeightFull95: {
    maxHeight: CONSTANTS.FullHeigt95,
  },
  minHeight100: {
    minHeight: CONSTANTS.Width100
  },

  // right
  right16: {
    right: CONSTANTS.Width16,
  },

  // bottom
  bottom3: {
    bottom: CONSTANTS.Width3,
  },
  bottom4: {
    bottom: CONSTANTS.Width4,
  },
  bottom5: {
    bottom: CONSTANTS.Width5,
  },
  bottom7: {
    bottom: CONSTANTS.Width7,
  },
  bottom8: {
    bottom: CONSTANTS.Width8,
  },
  bottom15: {
    bottom: CONSTANTS.Width15,
  },
  bottom30: {
    bottom: CONSTANTS.Width30,
  },
  bottom40: {
    bottom: CONSTANTS.Width40,
  },
  bottom56: {
    bottom: CONSTANTS.Width56,
  },
  bottom75: {
    bottom: CONSTANTS.Width75,
  },

  // height on height dimension
  heightOnDeviceHeight256: {
    height: CONSTANTS.Height * (256 / 760),
  },
  marginTopOnHeight110: {
    marginTop: CONSTANTS.Height * (110 / 760),
  },
  right0: {
    right: 0,
  },
  right_10: {
    right: CONSTANTS.Width10 * -1,
  },
  topMinus4: {
    top: -(CONSTANTS.Width4),
  },
  top8: {
    top: CONSTANTS.Width8,
  },
  top10: {
    top: CONSTANTS.Width10
  },
  top16: {
    top: CONSTANTS.Width16,
  },
  top20: {
    top: CONSTANTS.Width20
  },
  right8: {
    right: CONSTANTS.Width8,
  },
  minWidth10: {
    minWidth: CONSTANTS.Width10,
  },
  minWidth15: {
    minWidth: CONSTANTS.Width15,
  },
  minWidth20: {
    minWidth: CONSTANTS.Width20,
  },
  right24:{
    right: CONSTANTS.Width24
  },
  top24:{
    top: CONSTANTS.Width24
  },
  bottom12:{
    bottom: CONSTANTS.Width12
  },
  left12:{
    left: CONSTANTS.Width12
  },
  left16:{
    left: CONSTANTS.Width16
  }
});
