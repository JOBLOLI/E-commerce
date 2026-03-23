package mthree.ecomproject.backend.model;


@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue
    private Long id;
}