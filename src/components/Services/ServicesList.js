import ServiceCard from "./ServiceCard";


function ServicesList ({ posts,section_title, list_id}){
    return (
        <div className="relativ bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-18 lg:pb-10">
        <div className="absolute inset-0">
          <div className=" bg-gray-50 " />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="text-left">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">{section_title}</h2>
          </div>
          <div className="mx-auto mt-14 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            {posts.map((post, index) => (
              <ServiceCard data={post} index={`${list_id}-${index}`} key={`${list_id}-${index}`} />
            ))}
          </div>
        </div>
      </div>
      
    )
}

export default ServicesList;