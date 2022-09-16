import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header:{
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 32,
    marginTop: 28,
    justifyContent: 'space-between'
  },
  logo:{
    width: 72,
    height: 40
  },
  rigth:{
    width: 20,
    height: 20
  },
  cover:{
    width: 311,
    height: 140,
    marginTop: 40,
    borderRadius: 10
  },
  containerList: {
    width: '100%'
  },
  contentList: {
    paddingLeft: 32,
    paddingRight: 64,
    alignItems: 'flex-start',
  },
  defaultContentList:{
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.BOLD
  },
  emptyListContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});