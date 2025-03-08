import Image from "next/image";
import Link from "next/link";
import favorite from "../../assets/icon/favorite.svg";

const RecipeCard = ({ recipe }) => {
  return (
    <Link href={`${recipe.link}/${recipe.id}`} className="card recipe-card">
      <div className="card-top flex justify-between items-center pt-5 pb-10 px-5">
        <p>{recipe.cuisine}</p>
        <p className="flex items-center gap-2">
          <Image src={favorite} alt="love" />
          <span>{recipe.likes}</span>
        </p>
      </div>
      <div className="card-middle md:scale-[1.1]">
        <Image src={recipe.image} alt={recipe.name} />
      </div>
      <div className="card-bottom pt-10 px-5 pb-5">
        <p className="font-bold">{recipe.name}</p>
      </div>
    </Link>
  );
};

export default RecipeCard;
