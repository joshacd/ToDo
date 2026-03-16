import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
	flex: 1,
	padding: 40,
  },
  title: {
	fontSize: 24,
	fontWeight: 'bold',
	marginBottom: 16,
  },
  input: {
	borderWidth: 1,
	borderColor: '#ccc',
	padding: 10,
	marginBottom: 10,
	borderRadius: 6,
  },
  taskRow: {
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center',
	borderBottomWidth: 1,
	borderColor: '#eee',
  },
  task: {
	fontSize: 18,
	paddingVertical: 8,
  },
  deleteButton: {
	backgroundColor: '#0073DB',
	paddingHorizontal: 8,
	paddingVertical: 4,
	borderRadius: 6,
  },
  deleteButton: {
	  backgroundColor: '#e53935',
	  paddingHorizontal: 8,
	  paddingVertical: 4,
	  borderRadius: 6,
	},
  deleteText: {
	color: '#fff',
	fontWeight: 'bold',
  },
});

export default styles;
