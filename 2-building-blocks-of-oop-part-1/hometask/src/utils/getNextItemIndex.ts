// returns 0 index for last item in array
export const getNextItemIndex = (items: any[], currentIndex: number) =>
    items[currentIndex + 1] ? currentIndex + 1 : 0;
