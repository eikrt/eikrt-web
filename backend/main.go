package main
import (
	"net/http"
	"github.com/gin-gonic/gin"
	"github.com/gin-contrib/cors"
	//	"time"
)

func blogposts(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, getBlogposts(c.Param("filename")))
}
func CORSMiddleware() gin.HandlerFunc {
    return func(c *gin.Context) {

        c.Header("Access-Control-Allow-Origin", "*")
        c.Header("Access-Control-Allow-Headers", "*")
        
            c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
            c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
            c.Writer.Header().Set("Access-Control-Allow-Headers", "access-control-allow-origin, access-control-allow-headers")
            c.Writer.Header().Set("Access-Control-Allow-Methods", "GET, HEAD, POST, PUT, DELETE, OPTIONS, PATCH")
        

        if c.Request.Method == "OPTIONS" {
            c.AbortWithStatus(204)
            return
        }

        c.Next()
    }
}
func main() {
    router := gin.Default()
	/*   router.Use(cors.New(cors.Config{
	AllowOrigins:     []string{"http://localhost"},
	AllowMethods:     []string{"GET"},
	AllowHeaders:     []string{"Origin"},
	ExposeHeaders:    []string{"Content-Length"},
	AllowCredentials: true,
	AllowOriginFunc: func(origin string) bool {
	return origin == "https://github.com"
    },
    MaxAge: 12 * time.Hour,
    }))*/
	router.Use(cors.Default())
	router.GET("/blogposts/:filename", blogposts)
    router.Run("localhost:8080")
}
