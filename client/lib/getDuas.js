
export async function getDuas(id){
    console.log("inside Function Id Duas : ", id);
    const result = await fetch(`http://localhost:5000/api/category/dua/${id}`);
    return result.json();
}