const obj = {
    a () {
        const b = this.b()
    },
    b () {
        return 'b'
    }
}