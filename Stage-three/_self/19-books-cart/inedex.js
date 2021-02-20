let app = new Vue({
    el: "#app",
    data: {
        list: [
			{
				id: 1,
				name: '《算法导论》',
				date: '2006-9',
				price: 85.00,
				count: 1
			},
			{
				id: 2,
				name: '《UNIX编程艺术》',
				date: '2006-2',
				price: 59.00,
				count: 1
			},
			{
				id: 3,
				name: '《编程珠玑》',
				date: '2008-10',
				price: 39.00,
				count: 1
			},
			{
				id: 4,
				name: '《代码大全》',
				date: '2006-3',
				price: 128.00,
				count: 1
			},
		],
    },
	methods: {
		reduce(index){
			this.list[index].count --;
		},
		add(index){
			this.list[index].count ++;
		},
		deleteList(index){
			this.list.splice(index,1);
		},
		getPrice(price){
			return "¥" + price.toFixed(2);
		}
	},
	filters: {
		showPrice(price){
			return "¥" + price.toFixed(2);
		}
	},
	computed: {
		fullPrice(){
			// let fullPrice = 0;
			// for(let i=0;i<this.list.length;i++){
			// 	fullPrice += this.list[i].price * this.list[i].count;
			// }
			
			// 使用 for...in 进行循环遍历，for...in中的取值为下标

			// 使用 for...of 进行循环遍历，在有对象的时候使用特别方便
			// for(let item in this.list){
			// 	fullPrice += item.price * item.count;
			// }

			// this.list.forEach(el=>{
			// 	fullPrice += el.price * el.count;
			// })

			// return this.list.reduce(function(pre,next){
			// 	return pre + next.price * next.count;
			// },0);

			return this.list.reduce((pre,next) => pre + next.price * next.count, 0)

			// return fullPrice;
		}
	}
})