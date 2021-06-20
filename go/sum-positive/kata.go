package kata

func PositiveSum(numbers []int) int {
	var total int
	for _, num := range numbers {
		if num > 0 {
			total += num
		}
	}
	return total
}
