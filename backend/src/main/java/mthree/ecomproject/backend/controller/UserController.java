package mthree.ecomproject.backend.controller;

@RestController
@RequestMapping("/api/users")
public class UserController{
    @Autowired
    private UserService service;
}