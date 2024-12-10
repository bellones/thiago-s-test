import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  employeeItem: {
    flexDirection: 'row',
    padding: 10,
    paddingVertical: 15,
  },
  employeeAvatar: {
    height: 48,
    width: 48,
    borderWidth: 1,
    borderRadius: 100,
    marginHorizontal: 10,
  },
  employeeInfo: {
    justifyContent: 'space-around',
  },
  employeeAndroid: {
    flexDirection: 'row',
    padding: 10,
    paddingVertical: 15,
    borderRadius: 16,
    marginBottom: 12,
    backgroundColor: '#f6f6f6',
    marginHorizontal: 12,
    height: 96,
  },
});
