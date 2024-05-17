
class CrudRepository{
    constructor(model){
        this.model=model;
    }

    async create(data){
        try {
            const result=await this.model.create(data);
            return result;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async destroy(id){
        try {
            const result=await this.model.findByIdAndDelete(id);
            return result;
        } catch (error) {
           console.log(error);
           throw error;
        }
    }



    async getAll(id){
        try {
            const result=await this.model.findById({});
           return result;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async update(id,data){
        try {
            const result=await this.model.findByIdAndUpdate(id,data,{new:true});
           return result;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

export default CrudRepository;