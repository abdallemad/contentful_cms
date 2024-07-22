import {createClient} from 'contentful';
import { useEffect, useState } from 'react';

const client = createClient({
  space: 'hxyjomqpu4jz',
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'o9NRNUs7PMKS58K1I0igUj7y_EvryFR7JchoseQBYOY',
});
export const FetchProjects = ()=>{
  const [isLoading,setIsLoading] = useState(true);
  const [projects , setProjects] = useState([]);

  const getItems = async()=>{
    try {
      const response  = await client.getEntries({content_type:'projects'}).then(res=>res);
      const projects = response.items.map(item=>{
        // console.log(item.fields);
        const {title,image,url} = item.fields
        const id = item.sys.id;
        const img = image?.fields?.file?.url
        return {title,img,id,url}
      });
      setProjects(projects)
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(true);
    }
  }
  useEffect(()=>{
    getItems()
  },[])
  return {projects,isLoading}
}
