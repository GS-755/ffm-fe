const formatCurrency = (value: number): string => {
  return value.toLocaleString("vi-VN") + " đ";
}

export { formatCurrency };