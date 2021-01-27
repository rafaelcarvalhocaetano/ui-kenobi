export const colorTheme = (props) => {
  let color = 'fill'
  if (props.gost) {
    color = 'gost'
  }
  return color;
};

export const sizedButton = (props) => {
  const listWidth = ['giant', 'large', 'medium', 'small', 'tiny'];
  const get_size = listWidth.filter((x, i) => props[x] ? listWidth[i] : null)[0];
  return get_size ? get_size : 'medium';
}
