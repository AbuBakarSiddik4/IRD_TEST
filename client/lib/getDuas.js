
export async function getDuas(id){
    const result = await fetch(`http://localhost:5000/api/category/dua/${id}`);
    return result.json();
}